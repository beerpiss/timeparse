/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2014 Will Roberts
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

const SIGN: RegExp = /\s*(?<sign>[+|-])?\s*(?<unsigned>.*)$/
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
  DAYCLOCK,
  new RegExp(`${OPTSEP(WEEKS).source}\\s*${OPTSEP(DAYS).source}\\s*${HOURCLOCK.source}`),
  MINCLOCK,
  SECCLOCK
]

const MULTIPLIERS: Record<string, number> = {
  weeks: 60 * 60 * 24 * 7,
  days: 60 * 60 * 24,
  hours: 60 * 60,
  mins: 60,
  secs: 1
}

export interface TimeparseRecord {
  weeks?: string | number;
  days?: string | number;
  hours?: string | number;
  mins?: string | number;
  secs?: string | number;
}

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
 * Parse a time expression into a number of seconds.
 * If possible, the return value is a whole number, otherwise it is a float.
 * Reeturns undefined if a time expression cannot be parsed
 * @param {string} sval - The time expression to parse
 * @param {'seconds' | 'minutes'} granularity - If granularity is specified as minutes,
 *   then ambiguous times like "1:22" are interpreted as hours and minutes.
 *   Otherwise, they are considered as minutes and seconds.
 * @returns {number | undefined} - The number of seconds/minutes represented by the time expression,
 *   or undefined if the time expression cannot be parsed
 */
export function timeparse(sval: string, granularity: 'seconds' | 'minutes' = 'seconds'): number | undefined {
  const match: RegExpMatchArray | null = sval.match(SIGN)
  const sign: number = match?.groups?.sign === '-' ? -1 : 1
  const timeval = match?.groups?.unsigned
  for (const i in TIMEFORMATS) {
    const timefmt = TIMEFORMATS[i]
    const match: RegExpMatchArray | null | undefined = timeval?.match(timefmt)
    if (match?.[0]?.trim() && match?.[0]?.trim() === timeval) {
      const mdict: TimeparseRecord = granularity === 'minutes'
        ? interpretAsMinutes(String(timeval), <TimeparseRecord>match.groups)
        : <TimeparseRecord>match.groups
      // Filter out undefined values
      Object.keys(mdict).forEach((key) => mdict[key as keyof TimeparseRecord] === undefined && delete mdict[key as keyof TimeparseRecord])
      // Check if all fields are ints
      if (Object.values(mdict).every((val: string | number) => val === undefined || Number.isInteger(Number(val)))) {
        return sign * Object.keys(mdict)
          .map((key: string) => Number(mdict[key as keyof TimeparseRecord]) * MULTIPLIERS[key])
          .reduce((a: number, b: number) => a + b)
      } else if (mdict.secs === undefined || Number.isInteger(mdict.secs)) {
        return sign * Math.round(Object.keys(mdict)
          .map((key: string) => key !== 'secs' ? Number(mdict[key as keyof TimeparseRecord]) * MULTIPLIERS[key] : 0)
          .reduce((a: number, b: number) => a + b) + Number(mdict.secs ?? 0)
        )
      } else {
        return sign * Object.keys(mdict)
          .map((key: string) => Number(mdict[key as keyof TimeparseRecord]) * MULTIPLIERS[key])
          .reduce((a: number, b: number) => a + b)
      }
    }
  }
}
