import { View, FlatList, Text, Image } from "react-native";
import { useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles';
export default function Favorits(){
   const route = useRoute();
  const { favorites } = route.params;
return(
   <View>
      <FlatList
        data={favorites}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card3}>
            <Image
              source={{ uri: `https://image.tmdb.org/t/p/original/${item.poster_path}` }}
              style={styles.cardImg}
            />
            <Text style={{ fontSize: 30, color: "white" }}>{item.title}</Text>
            <View style={{paddingTop:20,alignItems:"center"}} >
             <Icon name="trash" size={40} color="red"/>
            </View>
          </View>
        )}
      />
    </View>
)
  
}