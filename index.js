// This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK (v2).
// Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,
// session persistence, api calls, and more.
const Alexa = require('ask-sdk-core');
const http = require('http');

const SKILL_NAME = 'Diversión matemática';
const {question} = require("./questions");
const {levelUpSpeech,additionalQuestionSpeech,startupSpeech} = require("./textArrays");
//const {convert} = require("./calculator");


const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
    },
     handle(handlerInput) {
        let speechText = '¡Que tal! bienvenido a Diversión matemática. Para iniciar el juego di: inicia, para salir di: cancelar';
        
         return handlerInput.responseBuilder
            .speak('¡Que tal! bienvenido a Diversión matemática. Para iniciar el juego di: inicia, para salir di: cancelar')
            .withSimpleCard('Nutrición Inteligente')
            .reprompt('Para jugar di: inicia, para salir di: cancela ')
            .addDirective({
                type: 'Alexa.Presentation.APL.RenderDocument',
                version: '1.0',
                document: require('./welcome.json'),
                datasources: {
                     "bodyTemplate7Data": {


                        "text": "¡Bienvenido!",

                    }
                }
                })
            .getResponse();
            
            
      /*  
let httpData={user_id:'testonondasdsadsa',last_question:'gatano',answer:30, level_count: 1, level:1 }
  
  let path='/api.php';
            
            return httpRequest2(httpData,path).then((res)=>{
        let speech='¡Que tal! vienvenido a Diversión matemática. Para iniciar el juego di: inicia, para salir di: cancelar 2';
        let reprompt='¡Vamos, tu puedes! esta es facil';
        
      
           
        return handlerInput.responseBuilder
      .speak(speech)
      .reprompt(reprompt)
      .withSimpleCard(SKILL_NAME, speech)
      .getResponse();

    }).catch(function(error) {
         return handlerInput.responseBuilder
        .speak('Disculpa no estoy segura, ¿podrias repetirlo?')
        .reprompt('no te escuché. ¿podrias repetirlo?')
        .getResponse();
    });
    
    /*
            
        
/*
         return httpRequest().then((res)=>{
            return handlerInput.responseBuilder
            .speak('¡Que tal! vienvenido a Diversión matemática. Para iniciar el juego di: inicia, para salir di: cancelar')
            .reprompt('Para jugar di: inicia, para salir di: cancela ')
            .getResponse();
        }).catch(function(error) {
             return handlerInput.responseBuilder
            .speak('Discupla no estoy segura, ¿podrias repetir la respuesta?')
            .reprompt('no te escuché. ¿podrias repetir la respuesta?')
            .getResponse();
        });
*/

    }
};



const SimulateFallBackHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
      && request.intent.name === 'SimulateFallBackIntent';
  },
  handle(handlerInput) {
      
    let attributes=handlerInput.attributesManager.getSessionAttributes();
    const slots = handlerInput.requestEnvelope.request.intent.slots;
    const value = slots['nombre'].value;
    let speechOutput = '<say-as interpret-as="interjection">eh?</say-as> Lo siento, no entendí, ¿podrias repetir la respuesta? ';
    let reprompt='¿podrias repetir la respuesta?';
    
    if(value && value=='continuar'){
        if(attributes.server_values){
             speechOutput = 'Ok continuemos. '+attributes.server_values.question;
             attributes.server_values.initiated=true;
            handlerInput.attributesManager.setSessionAttributes(attributes.server_values);
             reprompt=attributes.question;
             
                     return handlerInput.responseBuilder
      .speak(speechOutput)
      .reprompt(reprompt)
      .addDirective({
                type: 'Alexa.Presentation.APL.RenderDocument',
                version: '1.0',
                document: require('./main.json'),
                datasources: {
                    "bodyTemplate7Data": {
                        "type": "object",
                        "objectId": "bt7Sample",
                        "title": "¡Comencemos!",
                        "image": {
                            "sources": [
                            {
                                "url": "https://i.ibb.co/sWmDB1t/standby.png",
                                "size": "small",
                                "widthPixels": 0,
                                "heightPixels": 0
                            },
                            {
                                "url": "https://i.ibb.co/sWmDB1t/standby.png",
                                "size": "large",
                                "widthPixels": 0,
                                "heightPixels": 0
                            }
                            ]
                        },
                        "logoUrl": "",
                       
                    }
                }
        })
      //.withSimpleCard(SKILL_NAME, speechOutput)
      .getResponse();
             
        }
    }else if(value && value=='reiniciar'){
        let userId=handlerInput.requestEnvelope.context.System.user.userId;

        const sessionAttributes = {};
        Object.assign(sessionAttributes, {
            initiated: true,
            userId:userId,
            questionCount:1,
            level: 1,
        });
  
        let q=question(sessionAttributes.level);
  
        Object.assign(sessionAttributes, {
            validAnswer: q.value,
            question: q.question
         });
  

        handlerInput.attributesManager.setSessionAttributes(sessionAttributes);
        speechOutput=startupSpeech()+'  '+q.question;
        reprompt='¡Vamos, tu puedes! esta es facil'+q.question;
        
        
        
        
        
        return handlerInput.responseBuilder
      .speak(speechOutput)
      .reprompt(reprompt)
      .addDirective({
                type: 'Alexa.Presentation.APL.RenderDocument',
                version: '1.0',
                document: require('./main.json'),
                datasources: {
                    "bodyTemplate7Data": {
                        "type": "object",
                        "objectId": "bt7Sample",
                        "title": "¡Comencemos!",
                        "image": {
                            "sources": [
                            {
                                "url": "https://i.ibb.co/sWmDB1t/standby.png",
                                "size": "small",
                                "widthPixels": 0,
                                "heightPixels": 0
                            },
                            {
                                "url": "https://i.ibb.co/sWmDB1t/standby.png",
                                "size": "large",
                                "widthPixels": 0,
                                "heightPixels": 0
                            }
                            ]
                        },
                        "logoUrl": "",
                       
                    }
                }
        })
      //.withSimpleCard(SKILL_NAME, speechOutput)
      .getResponse();
        
    }
    


    return handlerInput.responseBuilder
      .speak(speechOutput)
      .reprompt(reprompt)
      .withSimpleCard(SKILL_NAME, speechOutput)
      .getResponse();
  },
};

//confirmacionIntent
//confirmacionIntent

const ConfirmacionIntent = {// validar si entra aqui, y hay una pregunta al aire
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
        && request.intent.name === 'confirmacionIntent';
  },
  handle(handlerInput) {
      
      
      let attributes=handlerInput.attributesManager.getSessionAttributes();
      
    const request = handlerInput.requestEnvelope.request;
    let userId=handlerInput.requestEnvelope.context.System.user.userId;

    if(attributes.confirmationNeeded){
        attributes.confirmationNeeded=false;
        
        
const sessionAttributes = {};
    Object.assign(sessionAttributes, {
    initiated: true,
    userId:userId,
    questionCount:1,
    level: 1
  });
  
    let q=question(sessionAttributes.level);
    
    Object.assign(sessionAttributes, {
    validAnswer: q.value,
    question: q.question
    
  });
  //data.user_id, data.last_question, data.answer, data.level, data.level_count
  let httpData={
      user_id:userId,
      last_question: q.question,
      answer: q.value,
      level:1,
      level_count:1
  }
  
  let path='/getAlexaInfo';
  
       return httpRequest(httpData,path).then((res)=>{
        let speech='¡Muy bien! <break time="1s"/> Aquí te va la primera pregunta: '+q.question;
        let reprompt='¡Vamos, tu puedes! esta es facil';
        
        if((res.level ) && (res.level_count)){
            speech='Veo que tienes una partida inconclusa. Si deseas continuarla di: continuar, si deseas iniciar una nueva di: reiniciar';
            reprompt='Si deseas continuarla di: continuar, si deseas iniciar una nueva di: reiniciar';
//           last_question: res.rows[0].last_question,
//                                answer: res.rows[0].answer,
//                                level: res.rows[0].level,
//                                level_count: res.rows[0].level_count,

           
            let server_values={
                initiated: false,
                userId:userId,
                questionCount:res.level_count,
                level: res.level,
                validAnswer: res.answer,
                question: res.last_question
            };
            
                Object.assign(sessionAttributes, {
                server_values: server_values,
                
              });
            
        }
        
        
        handlerInput.attributesManager.setSessionAttributes(sessionAttributes);
           
           
        return handlerInput.responseBuilder
      .speak(speech)
      .reprompt(reprompt)
      .withSimpleCard(SKILL_NAME, speech)
      .getResponse();

    }).catch(function(error) {
         return handlerInput.responseBuilder
        .speak('Disculpa no estoy segura, ¿podrias repetirlo?')
        .reprompt('no te escuché. ¿podrias repetirlo?')
        .getResponse();
    });
  
  

        
    }
    
    

        const speechOutput = '<say-as interpret-as="interjection">eh?</say-as> Lo siento, no entendí, ¿podrias repetir la respuesta? ';

        return handlerInput.responseBuilder
          .speak(speechOutput)
          .reprompt(speechOutput)
          .getResponse();
      
      
      
      
      
      
  },
}

const IniciaHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
        && request.intent.name === 'iniciaIntent';
  },
  handle(handlerInput) {
    let attributes=handlerInput.attributesManager.getSessionAttributes();
      
    const request = handlerInput.requestEnvelope.request;
    let userId=handlerInput.requestEnvelope.context.System.user.userId;

const sessionAttributes = {};
    Object.assign(sessionAttributes, {
    initiated: true,
    userId:userId,
    questionCount:1,
    level: 1
  });
  
    let q=question(sessionAttributes.level);
    
    Object.assign(sessionAttributes, {
    validAnswer: q.value,
    question: q.question
    
  });
  //data.user_id, data.last_question, data.answer, data.level, data.level_count
  let httpData={
      user_id:userId,
      last_question: q.question,
      answer: q.value,
      level:1,
      level_count:1
  }
  
  let path='/getAlexaInfo';
  
       return httpRequest(httpData,path).then((res)=>{
        let speech=startupSpeech()+'  '+'¡Muy bien! <break time="1s"/> Aquí te va la primera pregunta: '+q.question;
        let reprompt='¡Vamos, tu puedes! esta es facil';
        
        if((res.level ) && (res.level_count)){
            speech='Veo que tienes una partida inconclusa. Si deseas continuarla di: continuar, si deseas iniciar una nueva di: reiniciar';
            reprompt='Si deseas continuarla di: continuar, si deseas iniciar una nueva di: reiniciar';
//           last_question: res.rows[0].last_question,
//                                answer: res.rows[0].answer,
//                                level: res.rows[0].level,
//                                level_count: res.rows[0].level_count,

           
            let server_values={
                initiated: false,
                userId:userId,
                questionCount:res.level_count,
                level: res.level,
                validAnswer: res.answer,
                question: res.last_question
            };
            
                Object.assign(sessionAttributes, {
                server_values: server_values,
                
              });
             handlerInput.attributesManager.setSessionAttributes(sessionAttributes);
            return handlerInput.responseBuilder
              .speak(speech)
              .reprompt(reprompt)
                .addDirective({
                type: 'Alexa.Presentation.APL.RenderDocument',
                version: '1.0',
                document: require('./welcome.json'),
                datasources: {
                     "bodyTemplate7Data": {


                        "text": "¿Reiniciamos?",

                    }
                }
                })
              //.withSimpleCard(SKILL_NAME, speech)
              .getResponse();

        }else{
            
     return handlerInput.responseBuilder
      .speak(speech)
      .reprompt(reprompt)
      //.withSimpleCard(SKILL_NAME, speech)
        .addDirective({
                type: 'Alexa.Presentation.APL.RenderDocument',
                version: '1.0',
                document: require('./main.json'),
                datasources: {
                    "bodyTemplate7Data": {
                        "type": "object",
                        "objectId": "bt7Sample",
                        "title": "¡Comencemos!",
                        "image": {
                            "sources": [
                            {
                                "url": "https://i.ibb.co/sWmDB1t/standby.png",
                                "size": "small",
                                "widthPixels": 0,
                                "heightPixels": 0
                            },
                            {
                                "url": "https://i.ibb.co/sWmDB1t/standby.png",
                                "size": "large",
                                "widthPixels": 0,
                                "heightPixels": 0
                            }
                            ]
                        },
                        "logoUrl": "",
                       
                    }
                }
        })
      .getResponse();
            handlerInput.attributesManager.setSessionAttributes(sessionAttributes);

        }
        

    }).catch(function(error) {
         return handlerInput.responseBuilder
        .speak('Disculpa no estoy segura, ¿podrias repetirlo?')
        .reprompt('no te escuché. ¿podrias repetirlo?')
        .getResponse();
    });
  
  
  

   

   // var nombre = request.intent.slots.nombre.value;

  },
}

const RespuestaHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
        && request.intent.name === 'respuestaIntent';
  },
  handle(handlerInput) {
      
    let attributes=handlerInput.attributesManager.getSessionAttributes();
    const slots = handlerInput.requestEnvelope.request.intent.slots;
    const number = slots['numero'].value;
    
    
    let speech='';
    let repromptSpeech='';
    if(!attributes.initiated){
        repromptSpeech='¿Iniciamos?';
        speech='Tranquilo vaquero. aun no te he hecho una pregunta.¿quieres iniciar ahora?';
        attributes.confirmationNeeded=true;
    }else{
        let q=question(attributes.level);
        let userId=handlerInput.requestEnvelope.context.System.user.userId;
        
        let httpData={
              user_id:userId,
              last_question: q.question,
              answer: q.value,
              level:attributes.level,
              level_count:attributes.questionCount
          }
  
         let path='/updateAlexaInfo';
        
        
        if(number && number==attributes.validAnswer){
            
            return httpRequest(httpData,path).then((res)=>{
                
            let imageUrl='';
            if(attributes.questionCount===5 && attributes.level<=10){
                attributes.level=attributes.level+1;
                attributes.questionCount=1;

                speech=levelUpSpeech()+' '+q.question;// poner varios speeches para cada nivel
                attributes.validAnswer=q.value;
                attributes.question=q.question;
                repromptSpeech='no te escuché. <break time="1s"/> ¿Cual crees que sea la respuesta?';
                imageUrl='https://i.ibb.co/7VX77Bf/win.png';
            }else{
                attributes.questionCount=attributes.questionCount+1;
                speech= additionalQuestionSpeech()+' '+q.question;
                attributes.validAnswer=q.value;
                attributes.question=q.question;
                repromptSpeech='¿no te escuché. Cual crees que sea la respuesta? ';
                imageUrl='https://i.ibb.co/WtPtmXf/attack.png';
                
            }

           
                return handlerInput.responseBuilder
              .speak(speech)
              .reprompt(repromptSpeech)
              .addDirective({
                type: 'Alexa.Presentation.APL.RenderDocument',
                version: '1.0',
                document: require('./main.json'),
                datasources: {
                    "bodyTemplate7Data": {
                        "type": "object",
                        "objectId": "bt7Sample",
                        "title": "¡Muy bien!",
                        "image": {
                            "sources": [
                            {
                                "url": imageUrl,
                                "size": "small",
                                "widthPixels": 0,
                                "heightPixels": 0
                            },
                            {
                                "url": imageUrl,
                                "size": "large",
                                "widthPixels": 0,
                                "heightPixels": 0
                            }
                            ]
                        },
                        "logoUrl": "",
                       
                    }
                }
        })
             // .withSimpleCard(SKILL_NAME, speech)
              .getResponse();
        
            }).catch(function(error) {
                 return handlerInput.responseBuilder
                .speak('Disculpa no estoy segura, ¿podrias repetirlo?')
                .reprompt('no te escuché. ¿podrias repetirlo?')
                .getResponse();
            });
            
            
            

        
        }else{
            speech='No, esa no es la respuesta correcta, ¡Vamos, tu puedes!. ';
            repromptSpeech='Esa no era la respuesta <break time="1s"/> ¿Cual crees que sea?';
            
            
                return handlerInput.responseBuilder
      .speak(speech)
      .reprompt(repromptSpeech)
       .addDirective({
                type: 'Alexa.Presentation.APL.RenderDocument',
                version: '1.0',
                document: require('./main.json'),
                datasources: {
                    "bodyTemplate7Data": {
                        "type": "object",
                        "objectId": "bt7Sample",
                        "title": "Respuesta incorrecta",
                        "image": {
                            "sources": [
                            {
                                "url": "https://i.ibb.co/NpMG5SV/wrong.png",
                                "size": "small",
                                "widthPixels": 0,
                                "heightPixels": 0
                            },
                            {
                                "url": "https://i.ibb.co/NpMG5SV/wrong.png",
                                "size": "large",
                                "widthPixels": 0,
                                "heightPixels": 0
                            }
                            ]
                        },
                        "logoUrl": "",
                       
                    }
                }
        })
      //.withSimpleCard(SKILL_NAME, speech)
      .getResponse();
      
            
        }
        

    }
     // speech= speech+' '+convert();

    

    return handlerInput.responseBuilder
      .speak(speech)
      .reprompt(repromptSpeech)
      .withSimpleCard(SKILL_NAME, speech)
      .getResponse();
      
  },
}


function httpRequest2(data, path){
  return new Promise(function(resolve, reject) {


    var post_data = JSON.stringify(data);  

     var post_options = { 
     host:  'hackatonalexa.info', 
	//host:  '80.211.209.101', 
    // port: '8080', 
	port: '80', 
     path: path, 
     method: 'POST', 
     headers: {"Content-Type": "application/json",
     "Content-Length": Buffer.byteLength(post_data)} 
         
     };

    var req = http.request(post_options, function(res) {
      if (res.statusCode < 200 || res.statusCode >= 300) {
          return reject(new Error('statusCode=' + res.statusCode));
      }

      var body = [];
      res.on('data', function (chunk) {

        //console.log('BODY: ' + chunk);
        body.push(chunk);

      });

      res.on('end', function() {
        try {
           // body = JSON.parse(Buffer.concat(body).toString());
	 body=Buffer.concat(body).toString();

	//user_id:'testonon',last_question:'test',answer:3, level_count: 1, level:1
		
	let characterCount=0;
	characterCount=characterCount+data.user_id.length
	characterCount=characterCount+data.last_question.length
	characterCount=characterCount+data.answer.toString().length
	characterCount=characterCount+data.level.toString().length
	characterCount=characterCount+data.level_count.toString().length
	characterCount=characterCount+106;
	
	body= body.substring(characterCount,body.length);
	body = JSON.parse(body);
	
	console.log(body);
        } catch(e) {
            reject(e);
        }
        resolve(body);
      });


    });

    req.on('error', function(err) {
      reject(err);
    });

    req.end(post_data);

    //req.write('data\n');
    //req.write('data\n');

  });
}


/*
function httpRequest2(data, path){
  return new Promise(function(resolve, reject) {


    var post_data = JSON.stringify(data);  

     var post_options = { 
     host:  'hackatonalexa.info', 
	//host:  '80.211.209.101', 
    // port: '8080', 
	port: '80', 
     path: path, 
     method: 'POST', 
     headers: {"Content-Type": "application/json",
     "Content-Length": Buffer.byteLength(post_data)} 
         
     };

    var req = http.request(post_options, function(res) {
      if (res.statusCode < 200 || res.statusCode >= 300) {
          return reject(new Error('statusCode=' + res.statusCode));
      }

      var body = [];
      res.on('data', function (chunk) {

        //console.log('BODY: ' + chunk);
        body.push(chunk);

      });

      res.on('end', function() {
        try {
           // body = JSON.parse(Buffer.concat(body).toString());
	 body=Buffer.concat(body).toString()
	body= body.substring(47,body.length);
	body = JSON.parse(body);
	//console.log(body.status);
	console.log(body);
        } catch(e) {
            reject(e);
        }
        resolve(body);
      });


    });

    req.on('error', function(err) {
      reject(err);
    });

    req.end(post_data);

    //req.write('data\n');
    //req.write('data\n');

  });
}*/



function httpRequest(data, path){
  return new Promise(function(resolve, reject) {


    var post_data = JSON.stringify(data);  

     var post_options = { 
     host:  '80.211.209.101', 
     port: '8080', 
     path: path, 
     method: 'POST', 
     headers: {"Content-Type": "application/json",
     "Content-Length": Buffer.byteLength(post_data)} 
         
     };

    var req = http.request(post_options, function(res) {
      if (res.statusCode < 200 || res.statusCode >= 300) {
          return reject(new Error('statusCode=' + res.statusCode));
      }

      var body = [];
      res.on('data', function (chunk) {
        console.log('BODY: ' + chunk);
        body.push(chunk);

      });

      res.on('end', function() {
        try {
            body = JSON.parse(Buffer.concat(body).toString());
        } catch(e) {
            reject(e);
        }
        resolve(body);
      });


    });

    req.on('error', function(err) {
      reject(err);
    });

    req.end(post_data);

    //req.write('data\n');
    //req.write('data\n');

  });
}

/*


function httpRequest(){
  return new Promise(function(resolve, reject) {


    var post_data = JSON.stringify({
        foo: "morpheus",
    });  

     var post_options = { 
     host:  '80.211.209.101', 
     port: '8080', 
     path: '/test', 
     method: 'POST', 
     headers: {"Content-Type": "application/json",
     "Content-Length": Buffer.byteLength(post_data)} 
         
     };

    var req = http.request(post_options, function(res) {
      if (res.statusCode < 200 || res.statusCode >= 300) {
          return reject(new Error('statusCode=' + res.statusCode));
      }

      var body = [];
      res.on('data', function (chunk) {
        console.log('BODY: ' + chunk);
        body.push(chunk);

      });

      res.on('end', function() {
        try {
            body = JSON.parse(Buffer.concat(body).toString());
        } catch(e) {
            reject(e);
        }
        resolve(body);
      });


    });

    req.on('error', function(err) {
      reject(err);
    });

    req.end(post_data);

    //req.write('data\n');
    //req.write('data\n');

  });
}

*/


const HelloWorldIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'HelloWorldIntent';
    },
    handle(handlerInput) {
        const speechText = 'Hello World!';
        return handlerInput.responseBuilder
            .speak(speechText)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const HelpIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speechText = 'You can say hello to me! How can I help?';

        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .getResponse();
    }
};
const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.CancelIntent'
                || handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speechText = '¡<say-as interpret-as="interjection">hasta luego</say-as>, espero que volvamos a jugar pronto!';
        return handlerInput.responseBuilder
            .speak(speechText)
            .getResponse();
    }
};
const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse();
    }
};

// The intent reflector is used for interaction model testing and debugging.
// It will simply repeat the intent the user said. You can create custom handlers
// for your intents by defining them above, then also adding them to the request
// handler chain below.
const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = handlerInput.requestEnvelope.request.intent.name;
        const speechText = `You just triggered ${intentName}`;

        return handlerInput.responseBuilder
            .speak(speechText)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

// Generic error handling to capture any syntax or routing errors. If you receive an error
// stating the request handler chain is not found, you have not implemented a handler for
// the intent being invoked or included it in the skill builder below.
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        console.log(`~~~~ Error handled: ${error.message}`);
        const speechText = `Sorry, I couldn't understand what you said. Please try again.`;

        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .getResponse();
    }
};

// This handler acts as the entry point for your skill, routing all request and response
// payloads to the handlers above. Make sure any new handlers or interceptors you've
// defined are included below. The order matters - they're processed top to bottom.
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        ConfirmacionIntent,
        SimulateFallBackHandler,
        RespuestaHandler,
        IniciaHandler,
        LaunchRequestHandler,
        HelloWorldIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler) // make sure IntentReflectorHandler is last so it doesn't override your custom intent handlers
    .addErrorHandlers(
        ErrorHandler)
    .lambda();
