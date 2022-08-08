type Props = {
    children: React.ReactNode | React.ReactElement
}

export default function Card({ children }: Props) {
  return (
    <div className="xl:p-[32px] h-full opacity-90 drop-shadow-md">
        <div className="bg-white rounded-md h-full w-full">
            {children}
        </div>
    </div>
  )
}
