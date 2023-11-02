import {getPhotoBySlug, getPhotos} from '../../../lib/content'

export default async function Photo({
  params
}) {
  let photo = await getPhotoBySlug(decodeURIComponent(params.slug))

  return (
    <div className="photo-preview">
      <center>
        <img
          src={photo.publicPath}
        />
      </center>
      <p>{photo.title}</p>
      <p>
        <i>Shot in {photo.location || 'unknown'}</i>
      </p>
      <p>
        <i>{photo.dateStr}</i>
      </p>
    </div>
  )
}

export async function generateStaticParams() {
  let photos = await getPhotos()
  return photos.map(photo => ({
    slug: `${photo.date}-${photo.title}`
  }))
}