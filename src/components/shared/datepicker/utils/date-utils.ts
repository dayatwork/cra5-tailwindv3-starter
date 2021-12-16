export const DAYS = [
  'Minggu',
  'Senin',
  'Selasa',
  'Rabu',
  'Kamis',
  "Jum'at",
  'Sabtu',
]

export const MONTHS = [
  'Januari',
  'Februari',
  'Maret',
  'April',
  'Mei',
  'Juni',
  'Juli',
  'Agustus',
  'September',
  'Oktober',
  'November',
  'Desember',
]

export interface generateDateProps {
  year: number
  month: number
}

export function generateDate({ year, month }: generateDateProps) {
  const MONTH_SIZE = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

  // Check for leap year
  if (year % 100 === 0 ? year % 400 === 0 : year % 4 === 0) {
    MONTH_SIZE[1] = 29
  }

  const dates = []

  for (let day = 1; day <= MONTH_SIZE[month]; day++) {
    dates.push(new Date(year, month, day))
  }

  return {
    dates,
    offset: dates[0].getDay(),
  }
}
