
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
        >Cursos de Informática</Text>
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
            {key: '1 - AutoCad - Projetos 2D'},
            {key: '2 - Excel 2019 - Avançado'},
            {key: '3 - Lógica de programação'},
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
            Quais as vantagens de fazer um curso de Informática?
            </Text>
        </View>
        <View>
            
        <Text style={{
            margin:15,
            fontSize:15,
            

        }}>
        E fazer um curso de informática te possibilita adquirir compreensão sobre programas e ferramentas que podem ser úteis no seu dia a dia, como a navegação na internet, a comunicação e transmissão de dados, editar e compartilhar fotos, entre outros
        </Text>
        
        </View>
        <View style={{alignItems:"center", marginTop:130}}>

        <Image style={{width:"43%", height:"35%"}} source={{uri:("https://image.slidesharecdn.com/senac-120809132002-phpapp01/85/manual-de-identidade-visual-senac-2-320.jpg?cb=1659468421")}}></Image>
        
        </View>

        

        </View>


        </View>
    )
}