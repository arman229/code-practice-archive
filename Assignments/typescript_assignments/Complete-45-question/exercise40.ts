// Task No:40
// Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
interface Albumobject {
    artist: string;
    title: string;
    tracks?: number;
  }
  
  function make_album(
    artistname: string,
    album_title: string,
    numberOfTracks?: number
  ): Albumobject {
    const myalbum: Albumobject = {
      artist: artistname,
      title: album_title,
    };
    if (numberOfTracks !== undefined) {
      myalbum.tracks = numberOfTracks;
    }
  
    return myalbum;
  }
  
  const album_1 = make_album('artist1', 'title_1');
  const album_2 = make_album('artist2', 'title_2', 2);
  const album_3 = make_album('artist3', 'title_3', 3);
  
  console.log(album_1);
  console.log(album_2);
  console.log(album_3);
  