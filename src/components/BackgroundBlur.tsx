type Props = {
  children?: React.ReactNode | React.ReactElement
}

export default function BackgroundBlur({ children }: Props) {
  return (
    <div className="blur-sm absolute h-full w-full
      bg-[url(https://www.bwallpaperhd.com/wp-content/uploads/2018/06/AstronomicalClock.jpg)]">
      {children}
      </div>
  )
}
