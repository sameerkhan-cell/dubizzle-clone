export default function Logo({ className = '', width = 160, height = 36 }) {
  return (
    <img
      src="https://static.dubizzle.com/static_assets/dubizzleLogo.svg"
      alt="dubizzle logo"
      width={width}
      height={height}
      className={`block ${className}`}
    />
  )
}
