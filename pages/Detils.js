
import { View, Text, ScrollView, Image}from 'react-native';
import styles from '../styles'
export default function Detils({route}){
    const { movie } = route.params;  
  return (
    <>
    <ScrollView style={styles.card2}>
     <View>
   <Image
source={{
  uri: `https://image.tmdb.org/t/p/original/${movie.poster_path}`
}}
  style={styles.cardImg1}
/>
  </View>
    <View style={{alignItems:"center",}}>
      <Text style={{fontSize:25, paddingBottom:10,color:"white",paddingTop:30,}} >{movie.title}</Text>
      <Text style={{fontSize:20, paddingBottom:10,color:"white",paddingTop:30,}} >{movie.overview}</Text>
      <Text style={{fontSize:15,color:"white",paddingTop:30,}}>Language: {movie.original_language}</Text>
      <Text style={{fontSize:15,paddingBottom:90,color:"white"}} >Rating: {movie.vote_average}</Text>
    </View>
  </ScrollView>
    </>
  );
}
