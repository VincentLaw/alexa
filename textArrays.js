
const congratsSpeeches=[];

const motivationSpeeches=[];

const levelUpSpeeches=[
    '<say-as interpret-as="interjection">wórales</say-as> eres tan bueno que el enemigo huye de ti .',
    '<say-as interpret-as="interjection">ámonos</say-as> lo ultimo que ves del enemigo es su espalda .',
    '<say-as interpret-as="interjection">muchas felicidades</say-as> los enemigos reconocen tu habilidad huyendo de ti .sigamos adelante.',
    '<say-as interpret-as="interjection">no inventes</say-as>  ¡estas con todo!, la aventura continua.',
    '<say-as interpret-as="interjection">oooh</say-as> tu habilidad trascendera el tiempo.',
    '<say-as interpret-as="interjection">enhorabuena </say-as> <emphasis level="reduced">los enemigos tiemblan con tu prescencia </emphasis> siguamos avanzando.',
    '<say-as interpret-as="interjection">eso mero </say-as> has vencido a tus oponentes sin problemas, continuemos nuestra aventura.',
    '<say-as interpret-as="interjection">fabuloso </say-as> los enemigos corren despavoridos .',    
    '<say-as interpret-as="interjection">fantastico </say-as> has superado a este enemigo con la mano en la cintura.',    
    '<say-as interpret-as="interjection">fenomenal </say-as> <emphasis level="reduced"> la aventura sigue </emphasis> los enemigos reconocen tus habilidades.',    
    '<say-as interpret-as="interjection">lo veo y no lo creo </say-as> tu nivel esta sobre nueve mil.',    
    '<say-as interpret-as="interjection">mamma mia</say-as> tus habilidades te llevaran a donde nadie ha llegado. sigamos con la aventura.',    
    '<say-as interpret-as="interjection">muchas felicidades</say-as> eres increiblemente habil con tu destrza todo es posible.',    
    '<say-as interpret-as="interjection">pácatelas </say-as> el enemigo desearia ser tan bueno como tu, pero no pudo hacer nada mas que huir.',    
    '<say-as interpret-as="interjection">perfectísimo </say-as> tus rivales tiemblan ante tus destrezas sigamos adelante.',    
    '<say-as interpret-as="interjection">qué alegria </say-as> vences a tus enemigos con una facilidad increible.',    
    '<say-as interpret-as="interjection"> zaz </say-as> y tus enemigos se echan para atras la aventura empezas empieza.',    
    
    ];
    
    const additionalQuestionSpeeches=[
    '<say-as interpret-as="interjection">wórales</say-as>  <emphasis level="reduced"> veo que eres muy habilidoso</emphasis>, pero el reto aun no termina.',
    '<say-as interpret-as="interjection">ámonos</say-as> ¡Eres muy bueno!, el rey mando a su mejor soldado',
    '<say-as interpret-as="interjection">muchas felicidades</say-as> <emphasis level="reduced"> eres todo un aventurero</emphasis>. no te confies el viaje apenas empieza.',
    '<say-as interpret-as="interjection">no inventes</say-as>  el enemigo no tuvo una oportunidad contra ti.',
    '<say-as interpret-as="interjection">oooh</say-as> sabia que podia confiar en ti',
    '<say-as interpret-as="interjection">enhorabuena </say-as> <emphasis level="reduced"> tus habilidades superan a las de tus enemigos </emphasis> sigue asi.',
    '<say-as interpret-as="interjection">eso mero </say-as> por eso el rey te mando en esta aventura.',
    '<say-as interpret-as="interjection">fabuloso </say-as> eres genial, pero la aventura esta en su mejor parte.',    
    '<say-as interpret-as="interjection">fantastico </say-as> tu capacidad para superar retos no tiene precedentes.',    
    '<say-as interpret-as="interjection">fenomenal </say-as> <emphasis level="reduced"> aventura es tu segundo nombre </emphasis>. sigue asi.',    
    '<say-as interpret-as="interjection">lo veo y no lo creo </say-as> los enemigos tiemblan ante tus habilidades.',    
    '<say-as interpret-as="interjection">mamma mia</say-as> los retos no son nada para tu destreza. sigue asi.',    
    '<say-as interpret-as="interjection">muchas felicidades</say-as> eres increiblemente habil con tu destrza todo es posible.',    
    '<say-as interpret-as="interjection">pácatelas </say-as> el enemigo ni lo vio venir. eres un experto en esto.',    
    '<say-as interpret-as="interjection">perfectísimo </say-as> no podia esperar menos del mejor soldado del rey sigamos adelante.',    
    '<say-as interpret-as="interjection">qué alegria </say-as> si sigues asi te volveras una leyenda.',    
    '<say-as interpret-as="interjection"> zaz </say-as> tus habilidades son increibles el reto continua.',   
    '<say-as interpret-as="interjection"> fabuloso </say-as> Sir julio profe estaria orgulloso de ti.',   
    ];
    
    const StartUpSpeeches=[
    'durante tu aventura encontraras muchos retos y enemigos, un aventurero siempre esta con los sentidos alerta, pero que es eso que se ve en el bosque, ten cuidado un enemigo esta al asecho.',
    'los caminos de un aventurero no siempre son faciles, un enemigo te ha retado, tienes que defender el honor de tu reino y vencerlo .',
    'tus habilidades son conocidas entre tus rivales, ten cuidado los enemigos siempre retan a los mas fuertes.',
    'los retos son parte de la vida de un aventurero, cuida tu espalda, nunca sabras por donde llegara el proximo rival, <say-as interpret-as="interjection">mucho cuidado </say-as> un enemigo se acerca  .',
    'los enemigos llegan uno tras otro, un aventurero esta siempre alerta,</say-as interpret-as="interjection">nooo  </say-as>, estamos bajo ataque .',
    
    ];
    
    
    const levelUpSpeech= function(){
        let min=0;
        let max =levelUpSpeeches.length-1;
        let index= Math.floor(Math.random()*(max-min+1)+min);
        return levelUpSpeeches[index];
    };
    

    
    const additionalQuestionSpeech= function(){
        let min=0;
        let max =additionalQuestionSpeeches.length-1;
        let index= Math.floor(Math.random()*(max-min+1)+min);
        return additionalQuestionSpeeches[index];
        //return index;
    };
    
    const startupSpeech= function(){
        let min=0;
        let max =StartUpSpeeches.length-1;
        let index= Math.floor(Math.random()*(max-min+1)+min);
        return StartUpSpeeches[index];
        //return index;
    };
    
    


module.exports={
  levelUpSpeech,additionalQuestionSpeech,startupSpeech
}