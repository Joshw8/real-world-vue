let UUID = 0

export default function UniqueId(): any {
  const getId = () => {
    UUID++
    return UUID
  }

  return {
    getId,
  }
}
