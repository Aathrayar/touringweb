import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './servicecard.css';

function ActionAreaCard() {
  return (
    <div className="card-container">
      <Card sx={{ maxWidth: 345 }} className="carddd">
        <CardActionArea>
          <CardMedia
            component="img"
            image="https://images.unsplash.com/photo-1622969755054-8ea92b97e3f9?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="green iguana"
            style={{ height: '200px' }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Tailore Made Tours
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Tailored Tour Packages Our experienced travel experts work closely with you to understand your preferences
              and interests. Based on your inputs, we create bespoke itineraries that encompass your desired
              destinations, activities, and experiences.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

    {/* 2 */}

      <Card sx={{ maxWidth: 345 }} className="carddd">
        <CardActionArea>
          <CardMedia
            component="img"
            image="https://images.unsplash.com/photo-1604293679030-7cfcd7174ab1?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="green iguana"
            style={{ height: '200px' }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Luxury Tours
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Luxury Tours Elevate your travel experience to new heights with our exquisite luxury tour packages, meticulously curated for the discerning traveler who seeks nothing but the best. Immerse yourself in a world of sophistication.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

    {/* 3 */}
    
    <Card sx={{ maxWidth: 345 }} className="carddd">
        <CardActionArea>
          <CardMedia
            component="img"
            image="https://images.unsplash.com/photo-1627895456214-c9e9b1df5149?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3"
            alt="green iguana"
            style={{ height: '200px' }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Budget Tours
            </Typography>
            <Typography variant="body2" color="text.secondary">
            budget tours-Adventure through the vibrant landscapes and rich culture of Sri Lanka without exceeding your budget with our specially crafted budget-friendly tour package. Perfect for travelers who want to experience the best of Sri Lanka without breaking the bank.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

    {/* 4 */}
    
    <Card sx={{ maxWidth: 345 }} className="carddd">
        <CardActionArea>
          <CardMedia
            component="img"
            image="https://images.unsplash.com/photo-1627045766250-a957bb95301b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="green iguana"
            style={{ height: '200px' }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Honeymoon Tours 
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Honeymoon tour packages  Celebrate the beginning of your forever love story with our enchanting honeymoon tour packages, meticulously designed to  beach resorts to picturesque hill stations, immerse yourselves in romance, luxury, and adventure as you embark on this magical journey together.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

    {/* 5 */}
    
    <Card sx={{ maxWidth: 345 }} className="carddd">
        <CardActionArea>
          <CardMedia
            component="img"
            image="https://images.unsplash.com/photo-1548957175-84f0f9af659e?q=80&w=1782&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="green iguana"
            style={{ height: '200px' }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Family Tours
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Family packages- Designed to cater to the needs and preferences of families traveling with children, these packages offer a perfect blend of fun, education, and relaxation for all ages. From exciting activities to comfortable accommodations, we ensure that every member of your family creates unforgettable memories.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

    {/* 6 */}
    
    <Card sx={{ maxWidth: 345 }} className="carddd">
        <CardActionArea>
          <CardMedia
            component="img"
            image="https://images.unsplash.com/photo-1612862862126-865765df2ded?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="green iguana"
            style={{ height: '200px' }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Cultural heritage Tours
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Cultural heritage Tours - Delve into the fascinating world of Sri Lanka's cultural heritage with our immersive cultural heritage tours. Designed for history enthusiasts, art lovers, and cultural aficionados, these tours offer a captivating journey  centuries-old traditions and landmarks.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

    {/* 7 */}
    
    <Card sx={{ maxWidth: 345 }} className="carddd">
        <CardActionArea>
          <CardMedia
            component="img"
            image="https://images.unsplash.com/photo-1683041527005-58a56908dd01?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="green iguana"
            style={{ height: '200px' }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            7 Day Tours
            </Typography>
            <Typography variant="body2" color="text.secondary">
            7 Join us on this extraordinary journey and let the wonders of Sri Lanka captivate your heart and soul. With expert guides, comfortable accommodations, and immersive experiences, this 7-day adventure package promises to be the trip of a lifetime hill stations and thrilling safaris, this tour offers a perfect introduction to the wonders of the island paradise.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

    {/* 8 */}
    
    <Card sx={{ maxWidth: 345 }} className="carddd">
        <CardActionArea>
          <CardMedia
            component="img"
            image="https://images.unsplash.com/photo-1648819955193-776922ff68b5?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="green iguana"
            style={{ height: '200px' }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            15 Day Tours
            </Typography>
            <Typography variant="body2" color="text.secondary">
            15 days tour packages Explore  the jewel of the Indian Ocean with our exhilarating Sri Lanka adventure package. From ancient wonders to pristine beaches, lush tea estates to wildlife safaris, this comprehensive itinerary promises an unforgettable experience for travelers seeking to uncover the diverse treasures of this island paradise.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

    {/* 9 */}
    
    <Card sx={{ maxWidth: 345 }} className="carddd">
        <CardActionArea>
          <CardMedia
            component="img"
            image="https://images.unsplash.com/photo-1544750040-4ea9b8a27d38?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="green iguana"
            style={{ height: '200px' }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Beach Tours
            </Typography>
            <Typography variant="body2" color="text.secondary">
             Beach tours From palm-fringed beaches to turquoise waters, this journey will take you on a scenic adventure along the island's stunning coastline.coastal tour and discover the beauty and tranquility of Sri Lanka's pristine beaches and coastal gems. With breathtaking landscapes, vibrant culture, and warm hospitality, this journey promises to be a seaside escape like no other
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>


      {/* Repeat similar structure for other cards */}
    </div>
  );
}

export default ActionAreaCard;
