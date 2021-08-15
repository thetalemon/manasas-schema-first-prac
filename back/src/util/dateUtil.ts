export function getCurrentDate() {
  const now = new Date()
  const Year = now.getFullYear()
  const Month = now.getMonth()+1
  const day = now.getDate()
  const nowString = Year + "/" + Month + "/" + day
  return nowString
}