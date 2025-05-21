import React from 'react';
import { Card, Title, Text } from '@tremor/react';
import { PlayCircleIcon, MusicIcon, VideoIcon, UsersIcon, ShoppingBagIcon, StarIcon, CalendarIcon, TrendingUpIcon } from 'lucide-react';
const HomePage = () => {
  return <div className="space-y-8">
      {/* Hero Section with Video Background */}
      <div className="relative h-[500px] overflow-hidden -mx-8 -mt-8">
        <video autoPlay loop muted className="absolute w-full h-full object-cover" poster="https://images.unsplash.com/photo-1598387181032-a3103a2db5b3?ixlib=rb-4.0.3">
          <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1c0c5c946&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Where Creativity Meets{' '}
              <span className="text-accent">Innovation</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Discover the future of entertainment with New Age Vision's
              cutting-edge productions and artist development programs
            </p>
            <button className="bg-accent hover:bg-accent-dark text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors duration-300 inline-flex items-center">
              <PlayCircleIcon className="mr-2" size={24} />
              Watch Our Story
            </button>
          </div>
        </div>
      </div>
      {/* Services Grid */}
      <section className="py-12">
        <Title className="text-center text-3xl font-bold text-accent mb-12">
          Our Services
        </Title>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard icon={<MusicIcon size={32} />} title="Music Production" description="State-of-the-art recording facilities and expert production team" />
          <ServiceCard icon={<VideoIcon size={32} />} title="Film Production" description="Full-service video production from concept to screen" />
          <ServiceCard icon={<UsersIcon size={32} />} title="Artist Management" description="Comprehensive artist development and career management" />
          <ServiceCard icon={<ShoppingBagIcon size={32} />} title="Merchandise" description="Custom merchandise design and distribution" />
        </div>
      </section>
      {/* Featured Artists */}
      <section className="py-12 bg-secondary rounded-xl">
        <Title className="text-center text-3xl font-bold text-accent mb-12">
          Featured Artists
        </Title>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
          <ArtistCard image="https://images.unsplash.com/photo-1618609378039-b572f64c5b42?ixlib=rb-4.0.3" name="Sarah Johnson" genre="R&B / Soul" stats="2.5M+ Streams" />
          <ArtistCard image="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3" name="Mike Thunder" genre="Hip Hop" stats="1.8M+ Streams" />
          <ArtistCard image="https://images.unsplash.com/photo-1516016196468-6ff3f8b15095?ixlib=rb-4.0.3" name="Luna & The Wave" genre="Alternative" stats="3.2M+ Streams" />
        </div>
      </section>
      {/* Latest Releases */}
      <section className="py-12">
        <Title className="text-center text-3xl font-bold text-accent mb-12">
          Latest Releases
        </Title>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {latestReleases.map((release, index) => <ReleaseCard key={index} {...release} />)}
        </div>
      </section>
      {/* Upcoming Events */}
      <section className="py-12 bg-secondary rounded-xl">
        <Title className="text-center text-3xl font-bold text-accent mb-12">
          Upcoming Events
        </Title>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6">
          {upcomingEvents.map((event, index) => <EventCard key={index} {...event} />)}
        </div>
      </section>
      {/* Stats Section */}
      <section className="py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <StatCard number="500+" label="Artists Managed" />
          <StatCard number="1000+" label="Songs Produced" />
          <StatCard number="50+" label="Film Projects" />
          <StatCard number="10M+" label="Total Streams" />
        </div>
      </section>
    </div>;
};
const ServiceCard = ({
  icon,
  title,
  description
}) => <Card className="bg-secondary border border-gray-800 hover:border-accent transition-colors duration-300">
    <div className="text-accent mb-4">{icon}</div>
    <Title className="text-white mb-2">{title}</Title>
    <Text className="text-gray-400">{description}</Text>
  </Card>;
const ArtistCard = ({
  image,
  name,
  genre,
  stats
}) => <div className="bg-secondary-light rounded-lg overflow-hidden border border-gray-800 hover:border-accent transition-colors duration-300">
    <div className="h-64 overflow-hidden">
      <img src={image} alt={name} className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300" />
    </div>
    <div className="p-4">
      <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
      <p className="text-gray-400 mb-2">{genre}</p>
      <div className="flex items-center text-accent">
        <TrendingUpIcon size={16} className="mr-1" />
        <span className="text-sm">{stats}</span>
      </div>
    </div>
  </div>;
const ReleaseCard = ({
  image,
  title,
  artist,
  type
}) => <div className="bg-secondary rounded-lg overflow-hidden border border-gray-800 hover:border-accent transition-colors duration-300">
    <div className="relative h-48">
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="absolute top-2 right-2 bg-accent text-white text-xs px-2 py-1 rounded">
        {type}
      </div>
    </div>
    <div className="p-4">
      <h3 className="text-white font-bold mb-1">{title}</h3>
      <p className="text-gray-400">{artist}</p>
    </div>
  </div>;
const EventCard = ({
  image,
  title,
  date,
  location
}) => <div className="bg-secondary-light rounded-lg overflow-hidden border border-gray-800 hover:border-accent transition-colors duration-300 flex">
    <div className="w-1/3">
      <img src={image} alt={title} className="w-full h-full object-cover" />
    </div>
    <div className="p-4 flex-1">
      <h3 className="text-white font-bold mb-2">{title}</h3>
      <div className="flex items-center text-gray-400 mb-2">
        <CalendarIcon size={16} className="mr-2" />
        {date}
      </div>
      <p className="text-gray-400">{location}</p>
    </div>
  </div>;
const StatCard = ({
  number,
  label
}) => <Card className="bg-secondary border border-gray-800">
    <div className="text-center">
      <div className="text-3xl font-bold text-accent mb-1">{number}</div>
      <Text className="text-gray-400">{label}</Text>
    </div>
  </Card>;
const latestReleases = [{
  image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3',
  title: 'Midnight Dreams',
  artist: 'Sarah Johnson',
  type: 'Single'
}, {
  image: 'https://images.unsplash.com/photo-1511735111819-9a3f7709049c?ixlib=rb-4.0.3',
  title: 'Urban Beats',
  artist: 'Mike Thunder',
  type: 'Album'
}, {
  image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-4.0.3',
  title: 'Ocean Waves',
  artist: 'Luna & The Wave',
  type: 'EP'
}, {
  image: 'https://images.unsplash.com/photo-1482442120256-9c4a5ab72147?ixlib=rb-4.0.3',
  title: 'City Lights',
  artist: 'Various Artists',
  type: 'Compilation'
}];
const upcomingEvents = [{
  image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?ixlib=rb-4.0.3',
  title: 'Summer Music Festival 2024',
  date: 'July 15-17, 2024',
  location: 'Nairobi National Park'
}, {
  image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3',
  title: 'Artist Showcase Night',
  date: 'August 5, 2024',
  location: 'Kenya National Theatre'
}];
export default HomePage;