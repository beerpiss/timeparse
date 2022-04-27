const SIGN: RegExp = /\s*(?<sign>[+|-])?\s*(?<unsigned>.*)$/
const MONTHS: RegExp = /(?<months>[\d.]+)\s*(?:months?|mo|m)/
const WEEKS: RegExp = /(?<weeks>[\d.]+)\s*(?:weeks?|wks?|w)/
const DAYS: RegExp = /(?<days>[\d.]+)\s*(?:days?|dys?|d)/
const HOURS: RegExp = /(?<hours>[\d.]+)\s*(?:hours?|hrs?|h)/
const MINS: RegExp = /(?<mins>[\d.]+)\s*(?:minutes?|mins?|m)/
const SECS: RegExp = /(?<secs>[\d.]+)\s*(?:seconds?|secs?|s)/
const SEPARATORS: RegExp = /[,/]/
const SECCLOCK: RegExp = /:?(?<secs>\d{1,2}(?:\.\d+)?)/
const MINCLOCK: RegExp = /(?<mins>\d{1,2}):(?<secs>\d{2}(?:\.\d+)?)/
const HOURCLOCK: RegExp = /(?<hours>\d+):(?<mins>\d{2}):(?<secs>\d{2}(?:\.\d+)?)/
const DAYCLOCK: RegExp = /(?<days>\d+):(?<hours>\d{2}):(?<mins>\d{2}):(?<secs>\d{2}(?:\.\d+)?)/

const OPT = (x: RegExp): RegExp => new RegExp(`(?:${x.source})?`)
const OPTSEP = (x: RegExp): RegExp => new RegExp(`(?:${x.source}\\s*(?:${SEPARATORS.source}\\s*)?)?`)

const TIMEFORMATS: RegExp[] = [
  new RegExp(`${OPTSEP(WEEKS).source}\\s*${OPTSEP(DAYS).source}\\s*${OPTSEP(HOURS).source}\\s*${OPTSEP(MINS).source}\\s*${OPT(SECS).source}`),
  new RegExp(`${OPTSEP(MONTHS).source}\\s*${OPTSEP(WEEKS).source}\\s*${OPTSEP(DAYS).source}\\s*${OPTSEP(HOURS).source}\\s*${OPTSEP(MINS).source}\\s*${OPT(SECS).source}`),
  DAYCLOCK,
  new RegExp(`${OPTSEP(MONTHS).source}\\s*${OPTSEP(WEEKS).source}\\s*${OPTSEP(DAYS).source}\\s*${HOURCLOCK.source}`),
  MINCLOCK,
  SECCLOCK
]

const MULTIPLIERS: Record<string, number> = {
  months: 30 * 24 * 60 * 60 * 1000,
  weeks: 60 * 60 * 24 * 7 * 1000,
  days: 60 * 60 * 24 * 1000,
  hours: 60 * 60 * 1000,
  mins: 60 * 1000,
  secs: 1 * 1000
}

export interface TimeparseRecord {
  months?: number;
  weeks?: number;
  days?: number;
  hours?: number;
  mins?: number;
  secs?: number;
}

Object.fromEntries = (arr: Iterable<readonly [PropertyKey, any]>): { [k: string]: any } => Object.assign({}, ...Array.from(arr, ([k, v]) => ({ [k]: v })))

/**
 * Times like "1:22" are ambiguous; do they represent minutes and seconds, or hours and minutes?
 * By default, this library assumes the latter.
 * Call this function after parsing out a TimeparseRecord to change that assumption,
 * @param {string} sval - The time expression to parse
 * @param {TimeparseRecord} mdict - The parsed time expression
 * @returns {TimeparseRecord} - The parsed time expression, with the assumption changed
 */
function interpretAsMinutes(sval: string, mdict: TimeparseRecord): TimeparseRecord {
  if (sval.split(':').length - 1 === 1
      && !sval.includes('.')
      && mdict.hours === undefined
      && mdict.days === undefined
      && mdict.weeks === undefined) {
    mdict.hours = mdict.mins
    mdict.mins = mdict.secs
    delete mdict.secs
  }
  return mdict
}

/**
 * Times like "1m" is ambiguous; do they represent minutes, or months?
 * By default, this library assumes the former.
 * Call this function after parsing out a TimeparseRecord to change that assumption.
 * @param {string} sval - The time expression to parse
 * @param {TimeparseRecord} mdict - The parsed time expression
 * @returns {TimeparseRecord} - The parsed time expression, with the assumption changed
 */
function interpretAsMonths(sval: string, mdict: TimeparseRecord): TimeparseRecord {
  if (sval.split('m').length - 1 === 1
      && mdict.months === undefined
      && mdict.weeks === undefined
      && mdict.days === undefined
      && mdict.secs === undefined) {
    mdict.months = mdict.mins
    delete mdict.mins
  }
  return mdict
}

/**
 * Parse a time expression into a number of seconds.
 * If possible, the return value is a whole number, otherwise it is a float.
 * Reeturns undefined if a time expression cannot be parsed
 * @param {string} sval - The time expression to parse
 * @param {'seconds' | 'minutes' | 'months'} granularity - If granularity is specified as minutes,
 *   then ambiguous times like "1:22" are interpreted as hours and minutes.
 *   Otherwise, they are considered as minutes and seconds.
 * @returns {number | undefined} - The number of seconds/minutes represented by the time expression,
 *   or undefined if the time expression cannot be parsed
 */
export function timeparse(sval: string, granularity: 'seconds' | 'minutes' | 'months' = 'seconds'): number | undefined {
  const match: RegExpMatchArray | null = sval.match(SIGN)
  const sign: number = match?.groups?.sign === '-' ? -1 : 1
  const timeval = match?.groups?.unsigned
  return TIMEFORMATS.map((timefmt: RegExp) => {
    const match: RegExpMatchArray | null | undefined = timeval?.match(timefmt)
    if (match?.groups && match?.[0]?.trim() === timeval) {
      const groups = Object.fromEntries(
        Object.entries(match.groups)
          .filter(([_, value]: [string, string | undefined]) => value !== undefined)
          .map(([key, value]: [string, string]) => [key, Number(value)])
      )
      const mdict: TimeparseRecord = granularity === 'minutes'
        ? interpretAsMinutes(String(timeval), groups)
        : granularity === 'months'
          ? interpretAsMonths(String(timeval), groups)
          : groups
      if (Object.values(mdict).every((val: number) => val === undefined || Number.isInteger(Number(val)))) {
        return sign * Object.entries(mdict)
          .map(([key, value]: [string, number]) => value * MULTIPLIERS[key])
          .reduce((a: number, b: number) => a + b)
      } else if (mdict.secs === undefined || Number.isInteger(mdict.secs)) {
        return sign * Math.round(Object.entries(mdict)
          .map(([key, value]: [string, number]) => key !== 'secs' ? value * MULTIPLIERS[key] : 0)
          .reduce((a: number, b: number) => a + b) + (mdict.secs ?? 0)
        )
      } else {
        return sign * Object.entries(mdict)
          .map(([key, value]: [string, number]) => value * MULTIPLIERS[key])
          .reduce((a: number, b: number) => a + b)
      }
    } else {
      return 0
    }
  })
    .find(element => element)
}
