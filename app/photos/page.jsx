import Link from 'next/link'
import {getPhotos} from '../../lib/content'

export default async function Photos() {
  let photos = await getPhotos()

  return (
    <>
      <h3>
        Photos
        <small style={{ float: 'right' }}>Total: {photos.length}</small>
      </h3>
      <div className="photos">
        {photos.map(photo => (
          <Link
            key={photo.name}
            className="item"
            title={photo.title}
            href={`/photos/${encodeURIComponent(`${photo.date}-${photo.title}`)}`}
          >
            <img
              src={photo.publicPath}
              alt={photo.title}
              loading="lazy"
            />
            {/* <p>
              <small>{photo.title}</small>
            </p> */}
          </Link>
        ))}
      </div>
    </>
  )
}