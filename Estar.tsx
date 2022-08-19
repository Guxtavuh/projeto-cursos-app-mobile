
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
        >Cursos relacionados ao Bem-estar</Text>
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
            {key: '1 - Drenagem linfática manual'},
            {key: '2 - Analista de desenvolvimento e treinamento'},
            {key: '3 - Práticas meditativas'},
            {key: '4 - Shiatsu básico'},
            {key: '5 - Técnicas de depilação'},
            {key: '6 - Técnicas de manicure e pedicure'}
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
            Quais as vantagens de fazer um relacionado ao Bem-estar?
            </Text>
        </View>
        <View>
            
        <Text style={{
            margin:15,
            fontSize:15,
            

        }}>
        O bem-estar é um estado de satisfação no qual a pessoa se sente bem física e emocionalmente. As relações com familiares, amigos/as e colegas de trabalho, a relação com o trabalho, a alimentação, o padrão de sono e as atividades nos tempos livres interferem no nosso bem-estar e, assim, na nossa saúde.
        </Text>
        
        </View>
        <View style={{alignItems:"center"}}>

        <Image style={{width:"24%", height:"30%"}} source={{uri:("https://image.slidesharecdn.com/senac-120809132002-phpapp01/85/manual-de-identidade-visual-senac-2-320.jpg?cb=1659468421")}}></Image>
        
        </View>

        

        </View>


        </View>
    )
}