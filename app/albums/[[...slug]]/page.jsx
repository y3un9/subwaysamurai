import Link from 'next/link'
import Modal from '../../../components/ClientOnlyModal'
import {getImageByName, getImages} from '../../../lib/content'

export default async function Albums({
  params
}) {
  let {
    slug = []
  } = params

  let images = await getImages()
  let currentImage = await getImageByName(decodeURIComponent(slug[0]), images)

  return (
    <>
      <h3>
        Albums
        <small style={{ float: 'right' }}>Total: {images.length}</small>
      </h3>
      <div className="albums">
        {images.map(image => (
          <Link
            key={image.name}
            className="item"
            title={image.title}
            href={`/albums/${encodeURIComponent(image.name)}`}
          >
            <img
              src={image.publicPath}
              alt={image.title}
              // loading="lazy"
            />
            <p>
              <small>{images[0].title}</small>
            </p>
          </Link>
        ))}
      </div>
      {currentImage && (
        <Modal
          isOpen={true}
          closeHref="/albums"
        >
          <img
            className="image"
            width={520}
            src={currentImage.publicPath}
            alt={currentImage.title}
            // loading="lazy"
          />
        </Modal>
      )}
    </>
  )
}

export async function generateStaticParams() {
  let images = await getImages()
  return [
    { slug: [] },
    ...images.map(image => ({
      slug: [image.name]
    }))
  ]
}