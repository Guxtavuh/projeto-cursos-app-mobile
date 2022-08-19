import { Image,Text,Button, TouchableOpacity, View, ScrollView } from "react-native";
import { MaterialCommunityIcons,Feather,FontAwesome } from '@expo/vector-icons';

export default function Home({navigation}) {
    return(
        <View
        style={
            {
            backgroundColor:"white",
            height:"100%",

            }}
        >
        {/* Imagem 1 */}
        <View style={{backgroundColor:"white", justifyContent:"center", alignItems:"center"}}>
        
        <Image style={{width:"80%", height:"40%"}} source={{uri:("https://image.slidesharecdn.com/senac-120809132002-phpapp01/85/manual-de-identidade-visual-senac-2-320.jpg?cb=1659468421")}}></Image>
        <Text style={{textAlign:"center", fontSize:24, marginTop:20}}>Cursos</Text> 
        </View>
       
        
        {/* Parte de baixo, navegação */}
        <ScrollView horizontal={true}>
        <View style={{backgroundColor:"white", flexDirection:"row", marginBottom:40,paddingLeft:10, paddingRight:10}}>
        
        {/* Administração */}
        <TouchableOpacity onPress={()=>navigation.navigate("Administracao")} style={{
                margin:10,
                padding:20,
                justifyContent:"center",
                alignItems:"center",
                backgroundColor:"#d3d3d3",
                borderRadius: 45,
                
                
            }}>
                  <Text style={{color:"black", fontSize:20}}>Administração</Text>
                  <Image style={{marginTop:15, width:250, height:250, borderRadius: 45}} source={{uri:("https://fia.com.br/graduacao/wp-content/uploads/2019/06/original-aadbaf7992e422172190707647fd47f9.jpg")}}></Image>
                
                
            </TouchableOpacity>
            {/* Informatica */}
            <TouchableOpacity onPress={()=>navigation.navigate("Info")} style={{
                margin:10,
                padding:20,
                justifyContent:"center",
                alignItems:"center",
                backgroundColor:"#d3d3d3",
                borderRadius: 45,
                
                
            }}>
                  <Text style={{color:"black", fontSize:20}}>Informática</Text>
                  <Image style={{marginTop:15, width:250, height:250, borderRadius: 45}} source={{uri:("https://traine.com.br/wp-content/uploads/2021/07/curso-de-informatica-5-motivos-para-voce-se-matricular.jpg")}}></Image>
                
                
            </TouchableOpacity>
            {/* fotografia */}
            <TouchableOpacity onPress={()=>navigation.navigate("Fotografia")} style={{
                margin:10,
                padding:20,
                justifyContent:"center",
                alignItems:"center",
                backgroundColor:"#d3d3d3",
                borderRadius: 45,
                
                
            }}>
                  <Text style={{color:"black", fontSize:20}}>Fotografia</Text>
                  <Image style={{marginTop:15, width:250, height:250, borderRadius: 45}} source={{uri:("https://guiadoestudante.abril.com.br/wp-content/uploads/sites/4/2020/05/nota-docs-fotografia.jpg")}}></Image>
                
                
            </TouchableOpacity>
            {/* Fotografia */}
            <TouchableOpacity onPress={()=>navigation.navigate("Estar")} style={{
                margin:10,
                padding:20,
                justifyContent:"center",
                alignItems:"center",
                backgroundColor:"#d3d3d3",
                borderRadius: 45,
                
                
            }}>
                  <Text style={{color:"black", fontSize:20}}>Bem-estar</Text>
                  <Image style={{marginTop:15, width:250, height:250, borderRadius: 45}} source={{uri:("https://www.psicologosberrini.com.br/wp-content/uploads/alcancar-o-bem-estar-1024x684.jpg")}}></Image>
                
                
            </TouchableOpacity>
          

        </View>
        </ScrollView>


        </View>

    )
}