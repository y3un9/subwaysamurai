import Image from 'next/image'
import Link from 'next/link'
import Modal from '../../../components/Modal'
import {getImageByName, getImages} from '../../../lib/content'

export default async function Albums({
  params
}) {
  let {
    slug = []
  } = params

  let images = await getImages()
  let currentImage = await getImageByName(slug[0], images)

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
            href={`/albums/${image.name}`}
          >
            <Image
              width={200}
              height={300}
              src={image.publicPath}
              alt={image.title}
            />
            <p>
              <small>{images[0].title}</small>
            </p>
          </Link>
        ))}
      </div>
      {currentImage && (
        <Modal>
          <img
            width="100%"
            height="100%"
            src={currentImage.publicPath}
            alt={currentImage.title}
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
      slug: [image.path]
    }))
  ]
}