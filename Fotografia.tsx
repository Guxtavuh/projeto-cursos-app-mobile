
import React, { Component } from 'react';
import { Image,FlatList, StyleSheet, Text, View } from 'react-native';

export default function Administracao(){
    return(
        
        <View style={{height:"100%", backgroundColor:"white"}}>
        {/* titulo */}
        <View style={{backgroundColor:"white"}}>
        <Text
        style={{
        
         
        marginTop:30,
        fontSize:28,
        textAlign:"center",
        backgroundColor:"#d3d3d3",
        padding:50,
        margin:10,
        borderRadius:100,
        }}
        >Cursos de Fotografia</Text>
        </View>

        {/* conteudo */}
        <View style={{
        

        }}>

        <FlatList

        style={{
        backgroundColor:"#d3d3d3",
        padding:30,
        borderRadius: 80,
        margin:10
           

        }}
          data={[
            {key: '1 - Fotografia para gastronomia'},
            {key: '2 - Iluminação fotográfica com flash'},
            {key: '3 - Manipulação de imagens'},

          ]}
          renderItem={({item}) => <Text style={{
            padding: 10,
            fontSize: 18,
            height: 44,

          }}
          >{item.key}</Text>}
        />
        <View style={{flexDirection:"row"}}>
            <Text style={{
            margin:15,
            fontSize:20,

                
            }}>
            Quais as vantagens de fazer um curso de Fotografia?
            </Text>
        </View>
        <View>
            
        <Text style={{
            margin:15,
            fontSize:15,
            

        }}>
        As fotos importam muito porque registram momentos de nossas vidas que passam sem nada de especial, aparentemente. Momentos que parecem ter pouca importância para nós na época. Mas lá na frente, podemos evocar memórias boas de dessa época, ou pequenos detalhes escondidos na imagem que aprendemos a valorizar com o tempo.
        </Text>
        
        </View>
        <View style={{alignItems:"center"}}>

        <Image style={{width:"43%", height:"35%"}} source={{uri:("https://image.slidesharecdn.com/senac-120809132002-phpapp01/85/manual-de-identidade-visual-senac-2-320.jpg?cb=1659468421")}}></Image>
        
        </View>

        

        </View>


        </View>
    )
}