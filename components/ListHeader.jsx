export default function ListHeader({
  title,
  items,
}) {
  return (
    <h3>
      {title}
      {typeof items === 'number'
        ? <small>Total: {items}</small>
        : null
      }
    </h3>
  )
}