import { TouchableOpacity, View, FlatList,Text,TextInput,Image} from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome';
import { useEffect ,useState} from "react";
import styles from '../styles'
import { useNavigation } from '@react-navigation/native'; 
export default function Home(){
  const [movilist,setmovilist]=useState([]);
  const [searchtext,setsearchtex]=useState("");
  const navigation = useNavigation();
  const [originalMovilist, setOriginalMovilist] = useState([]);
  const [favorites, setFavorites] = useState([]);
useEffect(()=>{
fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=4c1f64ec38df343e7496f84fda28a342').then((page)=>{
return page.json();
}).then((page)=>{
  setOriginalMovilist(page.results)
setmovilist(page.results)
})
},[]);
 const addToFavorites = (item) => {

  if (!favorites.some(fav => fav.id === item.id)) {
    setFavorites([...favorites, item]);
  } else {
    alert("Item already in favorites:", item);
  }
};
 const filteredMovies =(text)=>{
    setsearchtex(text);
     if (text) {
      const filtered = originalMovilist.filter((item) =>
        item.title.toLowerCase().includes(text.toLowerCase())
      );
      setmovilist(filtered);
    }else {
    setmovilist(originalMovilist);
    }
 };


return (
  <>
<View style={styles.container}>
<View style={{marginBottom:15}}>
<TextInput style={styles.searchinput}
         placeholder="   Search"
         placeholderTextColor={'white'}
       value={searchtext}
        onChangeText={filteredMovies}
         >
         </TextInput>
         </View>
<FlatList
data={movilist}
keyExtractor={(item)=>item.id}
renderItem={({item})=>(
  <>
  <TouchableOpacity style={styles.card}>
   <View>
   <Image
source={{
  uri: `https://image.tmdb.org/t/p/original/${item.poster_path}`
}}
  style={styles.cardImg}
/>
  </View>
  <View style={{alignItems:"center",}}>
  <Text style={{fontSize:30,paddingTop:30,color:"white",}} >{item.title}</Text>
              </View>
              <View style={{flex:1 , justifyContent:"flex-end" ,flexDirection:"row" ,alignItems:"center",padding:50}}>
              <TouchableOpacity
                  onPress={() => navigation.navigate('Detils', {movie:item})}  
                  style={{ alignItems:"flex-end"}}
              >
               <Text style={{ borderColor:"white",
      borderWidth:1,
      borderBlockColor:"grey",width:"100%",textAlign:"center",  paddingHorizontal:30,
      paddingVertical:5,color:"white"}}>Details</Text>
              </TouchableOpacity>
               <View  style={{flex:1 ,  justifyContent:"flex-end",flexDirection:'row'}}>
                 <Icon name="star" size={30} color="gold"/>
                <Text style={{paddingHorizontal:10}} >{item.vote_average}</Text>
                <Icon name="heart" size={30} color="red"
  onPress={() => {
    navigation.navigate('Favorits', { favorites},addToFavorites(item)); 
  }}  
/>
              </View>
              </View>
  </TouchableOpacity>
  </>
)
}
>
</FlatList>
</View>
  </>
)
}



