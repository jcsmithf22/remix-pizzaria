export default function ItemCard({
  bgColor,
  imgSrc,
  imgAlt,
  title,
  body,
  styleNum
}: {
  bgColor: string,
  imgSrc: string,
  imgAlt: string,
  title: string,
  body: string,
  styleNum: string
}) {
  return (
    <div
      className={`
              flex flex-row flex-auto
              overflow-hidden
              border border-gray-200
              rounded-lg
              shadow-lg
              md:flex-col
              card-item
              md:flex-1 md:border-0 md:${bgColor}
            `}
    >
      <div className={`w-3/12 image-container${styleNum} md:w-auto`}>
        <img
          className="hidden md:inline"
          src={imgSrc}
          alt={imgAlt}
        />
      </div>
      <div className="w-9/12 p-4 sm:p-8 md:p-4">
        <h3 className="text-xl text-gray-700">{title}</h3>
        <p className="text-gray-600">
          {body}
        </p>
      </div>
    </div>
  )
}
