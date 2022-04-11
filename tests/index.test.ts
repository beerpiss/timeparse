import { timeparse } from '../src'

test(
  'Parsing seconds', () => {
    const result: number = 32
    expect(timeparse('32')).toBe(result)
    expect(timeparse('32s')).toBe(result)
    expect(timeparse('32sec')).toBe(result)
    expect(timeparse('32secs')).toBe(result)
    expect(timeparse('32second')).toBe(result)
    expect(timeparse('32seconds')).toBe(result)
    expect(timeparse('32 s')).toBe(result)
    expect(timeparse('32 sec')).toBe(result)
    expect(timeparse('32 secs')).toBe(result)
    expect(timeparse('32 second')).toBe(result)
    expect(timeparse('32 seconds')).toBe(result)

    expect(timeparse('+32')).toBe(result)
    expect(timeparse('+32s')).toBe(result)
    expect(timeparse('+32sec')).toBe(result)
    expect(timeparse('+32secs')).toBe(result)
    expect(timeparse('+32second')).toBe(result)
    expect(timeparse('+32seconds')).toBe(result)
    expect(timeparse('+32 s')).toBe(result)
    expect(timeparse('+32 sec')).toBe(result)
    expect(timeparse('+32 secs')).toBe(result)
    expect(timeparse('+32 second')).toBe(result)
    expect(timeparse('+32 seconds')).toBe(result)

    expect(timeparse('-32')).toBe(result * -1)
    expect(timeparse('-32s')).toBe(result * -1)
    expect(timeparse('-32sec')).toBe(result * -1)
    expect(timeparse('-32secs')).toBe(result * -1)
    expect(timeparse('-32second')).toBe(result * -1)
    expect(timeparse('-32seconds')).toBe(result * -1)
    expect(timeparse('-32 s')).toBe(result * -1)
    expect(timeparse('-32 sec')).toBe(result * -1)
    expect(timeparse('-32 secs')).toBe(result * -1)
    expect(timeparse('-32 second')).toBe(result * -1)
    expect(timeparse('-32 seconds')).toBe(result * -1)
  }
)

test(
  'Parsing minutes', () => {
    const result: number = 32 * 60
    expect(timeparse('32m')).toBe(result)
    expect(timeparse('32min')).toBe(result)
    expect(timeparse('32mins')).toBe(result)
    expect(timeparse('32minute')).toBe(result)
    expect(timeparse('32minutes')).toBe(result)
    expect(timeparse('32 m')).toBe(result)
    expect(timeparse('32 min')).toBe(result)
    expect(timeparse('32 mins')).toBe(result)
    expect(timeparse('32 minute')).toBe(result)
    expect(timeparse('32 minutes')).toBe(result)

    expect(timeparse('+32m')).toBe(result)
    expect(timeparse('+32min')).toBe(result)
    expect(timeparse('+32mins')).toBe(result)
    expect(timeparse('+32minute')).toBe(result)
    expect(timeparse('+32minutes')).toBe(result)
    expect(timeparse('+32 m')).toBe(result)
    expect(timeparse('+32 min')).toBe(result)
    expect(timeparse('+32 mins')).toBe(result)
    expect(timeparse('+32 minute')).toBe(result)
    expect(timeparse('+32 minutes')).toBe(result)

    expect(timeparse('-32m')).toBe(result * -1)
    expect(timeparse('-32min')).toBe(result * -1)
    expect(timeparse('-32mins')).toBe(result * -1)
    expect(timeparse('-32minute')).toBe(result * -1)
    expect(timeparse('-32minutes')).toBe(result * -1)
    expect(timeparse('-32 m')).toBe(result * -1)
    expect(timeparse('-32 min')).toBe(result * -1)
    expect(timeparse('-32 mins')).toBe(result * -1)
    expect(timeparse('-32 minute')).toBe(result * -1)
    expect(timeparse('-32 minutes')).toBe(result * -1)
  }
)

test(
  'Parsing hours', () => {
    const result: number = 32 * 60 * 60
    expect(timeparse('32h')).toBe(result)
    expect(timeparse('32hr')).toBe(result)
    expect(timeparse('32hrs')).toBe(result)
    expect(timeparse('32hour')).toBe(result)
    expect(timeparse('32hours')).toBe(result)
    expect(timeparse('32 h')).toBe(result)
    expect(timeparse('32 hr')).toBe(result)
    expect(timeparse('32 hrs')).toBe(result)
    expect(timeparse('32 hour')).toBe(result)
    expect(timeparse('32 hours')).toBe(result)

    expect(timeparse('+32h')).toBe(result)
    expect(timeparse('+32hr')).toBe(result)
    expect(timeparse('+32hrs')).toBe(result)
    expect(timeparse('+32hour')).toBe(result)
    expect(timeparse('+32hours')).toBe(result)
    expect(timeparse('+32 h')).toBe(result)
    expect(timeparse('+32 hr')).toBe(result)
    expect(timeparse('+32 hrs')).toBe(result)
    expect(timeparse('+32 hour')).toBe(result)
    expect(timeparse('+32 hours')).toBe(result)

    expect(timeparse('-32h')).toBe(result * -1)
    expect(timeparse('-32hr')).toBe(result * -1)
    expect(timeparse('-32hrs')).toBe(result * -1)
    expect(timeparse('-32hour')).toBe(result * -1)
    expect(timeparse('-32hours')).toBe(result * -1)
    expect(timeparse('-32 h')).toBe(result * -1)
    expect(timeparse('-32 hr')).toBe(result * -1)
    expect(timeparse('-32 hrs')).toBe(result * -1)
    expect(timeparse('-32 hour')).toBe(result * -1)
    expect(timeparse('-32 hours')).toBe(result * -1)
  }
)

test(
  'Parsing days', () => {
    const result: number = 32 * 24 * 60 * 60
    expect(timeparse('32d')).toBe(result)
    expect(timeparse('32dy')).toBe(result)
    expect(timeparse('32dys')).toBe(result)
    expect(timeparse('32day')).toBe(result)
    expect(timeparse('32days')).toBe(result)
    expect(timeparse('32 d')).toBe(result)
    expect(timeparse('32 dy')).toBe(result)
    expect(timeparse('32 dys')).toBe(result)
    expect(timeparse('32 day')).toBe(result)
    expect(timeparse('32 days')).toBe(result)

    expect(timeparse('+32d')).toBe(result)
    expect(timeparse('+32dy')).toBe(result)
    expect(timeparse('+32dys')).toBe(result)
    expect(timeparse('+32day')).toBe(result)
    expect(timeparse('+32days')).toBe(result)
    expect(timeparse('+32 d')).toBe(result)
    expect(timeparse('+32 dy')).toBe(result)
    expect(timeparse('+32 dys')).toBe(result)
    expect(timeparse('+32 day')).toBe(result)
    expect(timeparse('+32 days')).toBe(result)

    expect(timeparse('-32d')).toBe(result * -1)
    expect(timeparse('-32dy')).toBe(result * -1)
    expect(timeparse('-32dys')).toBe(result * -1)
    expect(timeparse('-32day')).toBe(result * -1)
    expect(timeparse('-32days')).toBe(result * -1)
    expect(timeparse('-32 d')).toBe(result * -1)
    expect(timeparse('-32 dy')).toBe(result * -1)
    expect(timeparse('-32 dys')).toBe(result * -1)
    expect(timeparse('-32 day')).toBe(result * -1)
    expect(timeparse('-32 days')).toBe(result * -1)
  }
)

test(
  'Parsing weeks', () => {
    const result: number = 32 * 7 * 24 * 60 * 60
    expect(timeparse('32w')).toBe(result)
    expect(timeparse('32wk')).toBe(result)
    expect(timeparse('32wks')).toBe(result)
    expect(timeparse('32week')).toBe(result)
    expect(timeparse('32weeks')).toBe(result)
    expect(timeparse('32 w')).toBe(result)
    expect(timeparse('32 wk')).toBe(result)
    expect(timeparse('32 wks')).toBe(result)
    expect(timeparse('32 week')).toBe(result)
    expect(timeparse('32 weeks')).toBe(result)

    expect(timeparse('+32w')).toBe(result)
    expect(timeparse('+32wk')).toBe(result)
    expect(timeparse('+32wks')).toBe(result)
    expect(timeparse('+32week')).toBe(result)
    expect(timeparse('+32weeks')).toBe(result)
    expect(timeparse('+32 w')).toBe(result)
    expect(timeparse('+32 wk')).toBe(result)
    expect(timeparse('+32 wks')).toBe(result)
    expect(timeparse('+32 week')).toBe(result)
    expect(timeparse('+32 weeks')).toBe(result)

    expect(timeparse('-32w')).toBe(result * -1)
    expect(timeparse('-32wk')).toBe(result * -1)
    expect(timeparse('-32wks')).toBe(result * -1)
    expect(timeparse('-32week')).toBe(result * -1)
    expect(timeparse('-32weeks')).toBe(result * -1)
    expect(timeparse('-32 w')).toBe(result * -1)
    expect(timeparse('-32 wk')).toBe(result * -1)
    expect(timeparse('-32 wks')).toBe(result * -1)
    expect(timeparse('-32 week')).toBe(result * -1)
    expect(timeparse('-32 weeks')).toBe(result * -1)
  }
)

test(
  'Parsing complex time expressions', () => {
    const result: number = 16 * 60 * 60 + 32 * 60 + 64
    expect(timeparse('16h 32m 64s')).toBe(result)
    expect(timeparse('16h32m64s')).toBe(result)
  }
)

test(
  'Timeparse test case 2', () => {
    expect(timeparse('2h32m')).toBe(9120)
    expect(timeparse('+2h32m')).toBe(9120)
    expect(timeparse('-2h32m')).toBe(-9120)
  }
)

test(
  'Timeparse test case 3', () => {
    expect(timeparse('3d2h32m')).toBe(268320)
    expect(timeparse('+3d2h32m')).toBe(268320)
    expect(timeparse('-3d2h32m')).toBe(-268320)
  }
)

test(
  'Timeparse test case 4', () => {
    expect(timeparse('1w3d2h32m')).toBe(873120)
    expect(timeparse('+1w3d2h32m')).toBe(873120)
    expect(timeparse('-1w3d2h32m')).toBe(-873120)
    expect(timeparse('1w 3d 2h 32m')).toBe(873120)
    expect(timeparse('+1w 3d 2h 32m')).toBe(873120)
    expect(timeparse('-1w 3d 2h 32m')).toBe(-873120)
    expect(timeparse('1 w 3 d 2 h 32 m')).toBe(873120)
    expect(timeparse('+1 w 3 d 2 h 32 m')).toBe(873120)
    expect(timeparse('-1 w 3 d 2 h 32 m')).toBe(-873120)
  }
)

test(
  'Timeparse test case 5', () => {
    expect(timeparse('4:13')).toBe(253)
    expect(timeparse('+4:13')).toBe(253)
    expect(timeparse('-4:13')).toBe(-253)
  }
)

test(
  'Timeparse test case 6', () => {
    expect(timeparse('4:13:02')).toBe(15182)
    expect(timeparse('+4:13:02')).toBe(15182)
    expect(timeparse('-4:13:02')).toBe(-15182)
  }
)

test(
  'Timeparse test case 7', () => {
    expect(timeparse('4:13:02.266')).toBeCloseTo(15182.266)
    expect(timeparse('+4:13:02.266')).toBeCloseTo(15182.266)
    expect(timeparse('-4:13:02.266')).toBeCloseTo(-15182.266)
  }
)

test(
  'Timeparse test case 8', () => {
    expect(timeparse('2:04:13:02.266')).toBeCloseTo(187982.266)
    expect(timeparse('+2:04:13:02.266')).toBeCloseTo(187982.266)
    expect(timeparse('-2:04:13:02.266')).toBeCloseTo(-187982.266)
  }
)

test(
  'Timeparse test case 9', () => {
    expect(timeparse('2 days,  4:13:02')).toBe(187982)
    expect(timeparse('+2 days,  4:13:02')).toBe(187982)
    expect(timeparse('-2 days,  4:13:02')).toBe(-187982)
  }
)

test(
  'Timeparse test case 10', () => {
    expect(timeparse('2 days,  4:13:02.266')).toBeCloseTo(187982.266)
    expect(timeparse('+2 days,  4:13:02.266')).toBeCloseTo(187982.266)
    expect(timeparse('-2 days,  4:13:02.266')).toBeCloseTo(-187982.266)
  }
)

test(
  'Timeparse test case 11', () => {
    expect(timeparse('5hr34m56s')).toBe(20096)
    expect(timeparse('+5hr34m56s')).toBe(20096)
    expect(timeparse('-5hr34m56s')).toBe(-20096)
  }
)

test(
  'Timeparse test case 12', () => {
    expect(timeparse('5 hours, 34 minutes, 56 seconds')).toBe(20096)
    expect(timeparse('+5 hours, 34 minutes, 56 seconds')).toBe(20096)
    expect(timeparse('-5 hours, 34 minutes, 56 seconds')).toBe(-20096)
  }
)

test(
  'Timeparse test case 13', () => {
    expect(timeparse('5 hrs, 34 mins, 56 secs')).toBe(20096)
    expect(timeparse('+5 hrs, 34 mins, 56 secs')).toBe(20096)
    expect(timeparse('-5 hrs, 34 mins, 56 secs')).toBe(-20096)
  }
)

test(
  'Timeparse test case 14', () => {
    expect(timeparse('2 days, 5 hours, 34 minutes, 56 seconds')).toBe(192896)
    expect(timeparse('+2 days, 5 hours, 34 minutes, 56 seconds')).toBe(192896)
    expect(timeparse('-2 days, 5 hours, 34 minutes, 56 seconds')).toBe(-192896)
  }
)

test(
  'Timeparse test case 15', () => {
    const result: number = 1.75
    expect(timeparse('1.75')).toBeCloseTo(result)
    expect(timeparse('1.75s')).toBeCloseTo(result)
    expect(timeparse('1.75sec')).toBeCloseTo(result)
    expect(timeparse('1.75secs')).toBeCloseTo(result)
    expect(timeparse('1.75second')).toBeCloseTo(result)
    expect(timeparse('1.75seconds')).toBeCloseTo(result)
    expect(timeparse('1.75 s')).toBeCloseTo(result)
    expect(timeparse('1.75 sec')).toBeCloseTo(result)
    expect(timeparse('1.75 secs')).toBeCloseTo(result)
    expect(timeparse('1.75 second')).toBeCloseTo(result)
    expect(timeparse('1.75 seconds')).toBeCloseTo(result)

    expect(timeparse('+1.75')).toBeCloseTo(result)
    expect(timeparse('+1.75s')).toBeCloseTo(result)
    expect(timeparse('+1.75sec')).toBeCloseTo(result)
    expect(timeparse('+1.75secs')).toBeCloseTo(result)
    expect(timeparse('+1.75second')).toBeCloseTo(result)
    expect(timeparse('+1.75seconds')).toBeCloseTo(result)
    expect(timeparse('+1.75 s')).toBeCloseTo(result)
    expect(timeparse('+1.75 sec')).toBeCloseTo(result)
    expect(timeparse('+1.75 secs')).toBeCloseTo(result)
    expect(timeparse('+1.75 second')).toBeCloseTo(result)
    expect(timeparse('+1.75 seconds')).toBeCloseTo(result)

    expect(timeparse('-1.75')).toBeCloseTo(result * -1)
    expect(timeparse('-1.75s')).toBeCloseTo(result * -1)
    expect(timeparse('-1.75sec')).toBeCloseTo(result * -1)
    expect(timeparse('-1.75secs')).toBeCloseTo(result * -1)
    expect(timeparse('-1.75second')).toBeCloseTo(result * -1)
    expect(timeparse('-1.75seconds')).toBeCloseTo(result * -1)
    expect(timeparse('-1.75 s')).toBeCloseTo(result * -1)
    expect(timeparse('-1.75 sec')).toBeCloseTo(result * -1)
    expect(timeparse('-1.75 secs')).toBeCloseTo(result * -1)
    expect(timeparse('-1.75 second')).toBeCloseTo(result * -1)
    expect(timeparse('-1.75 seconds')).toBeCloseTo(result * -1)
  }
)

test(
  'Timeparse test case 16', () => {
    const result: number = 1.2 * 60
    expect(timeparse('1.2m')).toBeCloseTo(result)
    expect(timeparse('1.2min')).toBeCloseTo(result)
    expect(timeparse('1.2mins')).toBeCloseTo(result)
    expect(timeparse('1.2minute')).toBeCloseTo(result)
    expect(timeparse('1.2minutes')).toBeCloseTo(result)
    expect(timeparse('1.2 m')).toBeCloseTo(result)
    expect(timeparse('1.2 min')).toBeCloseTo(result)
    expect(timeparse('1.2 mins')).toBeCloseTo(result)
    expect(timeparse('1.2 minute')).toBeCloseTo(result)
    expect(timeparse('1.2 minutes')).toBeCloseTo(result)

    expect(timeparse('+1.2m')).toBeCloseTo(result)
    expect(timeparse('+1.2min')).toBeCloseTo(result)
    expect(timeparse('+1.2mins')).toBeCloseTo(result)
    expect(timeparse('+1.2minute')).toBeCloseTo(result)
    expect(timeparse('+1.2minutes')).toBeCloseTo(result)
    expect(timeparse('+1.2 m')).toBeCloseTo(result)
    expect(timeparse('+1.2 min')).toBeCloseTo(result)
    expect(timeparse('+1.2 mins')).toBeCloseTo(result)
    expect(timeparse('+1.2 minute')).toBeCloseTo(result)
    expect(timeparse('+1.2 minutes')).toBeCloseTo(result)

    expect(timeparse('-1.2m')).toBeCloseTo(result * -1)
    expect(timeparse('-1.2min')).toBeCloseTo(result * -1)
    expect(timeparse('-1.2mins')).toBeCloseTo(result * -1)
    expect(timeparse('-1.2minute')).toBeCloseTo(result * -1)
    expect(timeparse('-1.2minutes')).toBeCloseTo(result * -1)
    expect(timeparse('-1.2 m')).toBeCloseTo(result * -1)
    expect(timeparse('-1.2 min')).toBeCloseTo(result * -1)
    expect(timeparse('-1.2 mins')).toBeCloseTo(result * -1)
    expect(timeparse('-1.2 minute')).toBeCloseTo(result * -1)
    expect(timeparse('-1.2 minutes')).toBeCloseTo(result * -1)
  }
)

test(
  'Timeparse test case 17', () => {
    const result: number = 5.6 * 7 * 24 * 60 * 60
    expect(timeparse('5.6w')).toBeCloseTo(result)
    expect(timeparse('5.6wk')).toBeCloseTo(result)
    expect(timeparse('5.6wks')).toBeCloseTo(result)
    expect(timeparse('5.6week')).toBeCloseTo(result)
    expect(timeparse('5.6weeks')).toBeCloseTo(result)
    expect(timeparse('5.6 w')).toBeCloseTo(result)
    expect(timeparse('5.6 wk')).toBeCloseTo(result)
    expect(timeparse('5.6 wks')).toBeCloseTo(result)
    expect(timeparse('5.6 week')).toBeCloseTo(result)
    expect(timeparse('5.6 weeks')).toBeCloseTo(result)

    expect(timeparse('+5.6w')).toBeCloseTo(result)
    expect(timeparse('+5.6wk')).toBeCloseTo(result)
    expect(timeparse('+5.6wks')).toBeCloseTo(result)
    expect(timeparse('+5.6week')).toBeCloseTo(result)
    expect(timeparse('+5.6weeks')).toBeCloseTo(result)
    expect(timeparse('+5.6 w')).toBeCloseTo(result)
    expect(timeparse('+5.6 wk')).toBeCloseTo(result)
    expect(timeparse('+5.6 wks')).toBeCloseTo(result)
    expect(timeparse('+5.6 week')).toBeCloseTo(result)
    expect(timeparse('+5.6 weeks')).toBeCloseTo(result)

    expect(timeparse('-5.6w')).toBeCloseTo(result * -1)
    expect(timeparse('-5.6wk')).toBeCloseTo(result * -1)
    expect(timeparse('-5.6wks')).toBeCloseTo(result * -1)
    expect(timeparse('-5.6week')).toBeCloseTo(result * -1)
    expect(timeparse('-5.6weeks')).toBeCloseTo(result * -1)
    expect(timeparse('-5.6 w')).toBeCloseTo(result * -1)
    expect(timeparse('-5.6 wk')).toBeCloseTo(result * -1)
    expect(timeparse('-5.6 wks')).toBeCloseTo(result * -1)
    expect(timeparse('-5.6 week')).toBeCloseTo(result * -1)
    expect(timeparse('-5.6 weeks')).toBeCloseTo(result * -1)
  }
)

test(
  'Timeparse test bare seconds', () => {
    expect(timeparse(':13')).toBe(13)
    expect(timeparse('+:13')).toBe(13)
    expect(timeparse('-:13')).toBe(-13)
    expect(timeparse('13')).toBe(13)
    expect(timeparse('+13')).toBe(13)
    expect(timeparse('-13')).toBe(-13)
  }
)

test(
  'Timeparse test granularity (minutes)', () => {
    expect(timeparse('4:32', 'minutes')).toBe(272 * 60)
    expect(timeparse('+4:32', 'minutes')).toBe(272 * 60)
    expect(timeparse('-4:32', 'minutes')).toBe(-272 * 60)
  }
)

test(
  'Checks that granularity does not apply inappropriately', () => {
    expect(timeparse('4:32:02', 'minutes')).toBe(272 * 60 + 2)
    expect(timeparse('+4:32:02', 'minutes')).toBe(272 * 60 + 2)
    expect(timeparse('-4:32:02', 'minutes')).toBe(- (272 * 60 + 2))
    expect(timeparse('7:02.223', 'minutes')).toBeCloseTo(7 * 60 + 2.223)
    expect(timeparse('+7:02.223', 'minutes')).toBe(7 * 60 + 2.223)
    expect(timeparse('-7:02.223', 'minutes')).toBe(- (7 * 60 + 2.223))
    expect(timeparse('0:02', 'seconds')).toBe(2)
    expect(timeparse('+0:02', 'seconds')).toBe(2)
    expect(timeparse('-0:02', 'seconds')).toBe(-2)
  }
)


