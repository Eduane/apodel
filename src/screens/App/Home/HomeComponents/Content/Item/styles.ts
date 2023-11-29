import { StyleSheet } from 'react-native';
import { Colors } from '../../../../../../constants/colors';

const styles = StyleSheet.create({
    container: {
marginBottom:10

      },
      image:{
        width:'100%',
        height:130,
        justifyContent:'center',
        alignItems:'center',
        
      },
      imageWrapper:{
        borderRadius:8,
        overflow:'hidden'
      },
    title:{
        fontSize:32,
        lineHeight:32,
        color:Colors.white
    },
    subTitle:{
      fontSize:20,
      lineHeight:20,
      color:Colors.white

    },
    footer:{flexDirection:"row",justifyContent:'space-between',alignItems:'center',height:30,
  marginHorizontal:10
  },
    left:{flexDirection:"row",alignItems:'center'},
    leftText:{
     justifyContent   :'center',
     marginTop:4,
     marginLeft:10
    },
    leftTextClosed:{
      color:Colors.orange,
      marginTop:4,
      marginLeft:10
    },

    right:{
      flexDirection:'row',
      gap:10,
      alignItems:'center'
    },
    rightText:{
marginTop:4
    },
    overlay:{
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'rgba(0,0,0,0.3)',
    },
    darkOverlay:{
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'rgba(0,0,0,0.6)',
    }
});

export default styles;
