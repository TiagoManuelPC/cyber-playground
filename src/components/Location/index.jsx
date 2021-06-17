import './index.css'
import {Image} from 'cloudinary-react';

export default function Location({name, hashtag, location, coordinates, caption, description, publicId}) {
 return (
   <div>
     <div class="location_wrapper">
      <div class="location_photo">Image<Image class="cloud_photo" cloudName="cyber_photos" publicId={publicId} /></div>
      <div class="location_map">Map</div>
      <div class="location_info"><p>{hashtag}</p></div>
      </div>
   </div>
 )
}