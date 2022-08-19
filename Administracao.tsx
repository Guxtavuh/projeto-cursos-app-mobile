
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
        >Cursos de administração</Text>
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
            {key: '1 - Administração de negocios'},
            {key: '2 - Analista de Marketing em mídias sociais'},
            {key: '3 - Assistente administrativo'},
            {key: '4 - Assistente pessoal'},
            {key: '5 - Assistente de recuros humanos'},
            {key: '6 - Assistente financeiro'}
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
            Quais as vantagens de fazer um curso de Administração?
            </Text>
        </View>
        <View>
            
        <Text style={{
            margin:15,
            fontSize:15,
            

        }}>
        Depois de formado, você pode trabalhar em qualquer segmento. Essa formação ampla também permite que os profissionais da área trabalhem em todos os segmentos e em organizações de vários tipos. Afinal, todo negócio depende dos conhecimentos da Administração para funcionar.
        </Text>
        
        </View>
        <View style={{alignItems:"center"}}>

        <Image style={{width:"43%", height:"30%"}} source={{uri:("https://image.slidesharecdn.com/senac-120809132002-phpapp01/85/manual-de-identidade-visual-senac-2-320.jpg?cb=1659468421")}}></Image>
        
        </View>

        

        </View>


        </View>
    )
}