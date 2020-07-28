(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{57:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return d}));var n=a(2),i=a(6),s=(a(0),a(72)),r={id:"consumer-credit",title:"Consumer credit",sidebar_label:"Consumer credit"},c={unversionedId:"consumer-credit",id:"consumer-credit",isDocsHomePage:!1,title:"Consumer credit",description:"A consumer can control the flow of messages from a broker by allocating credit for a particular number of messages. As the broker delivers messages, it spends this credit. Each delivered message results in decrementing the available message credit by one. Each message acknowledged by the client increments the available message credit by one.",source:"@site/../docs/consumer-credit.md",permalink:"/dotnet-activemq-artemis-client/docs/consumer-credit",editUrl:"https://github.com/Havret/dotnet-activemq-artemis-client/edit/master/website/../docs/consumer-credit.md",sidebar_label:"Consumer credit",sidebar:"someSidebar",previous:{title:"Message Priority",permalink:"/dotnet-activemq-artemis-client/docs/message-priority"},next:{title:"Automatic Recovery From Network Failures",permalink:"/dotnet-activemq-artemis-client/docs/auto-recovery"}},o=[{value:"Configuring message credit on a consumer",id:"configuring-message-credit-on-a-consumer",children:[]}],m={rightToc:o};function d(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"A consumer can control the flow of messages from a broker by allocating ",Object(s.b)("em",{parentName:"p"},"credit")," for a particular number of messages. As the broker delivers messages, it spends this credit. Each delivered message results in decrementing the available message credit by one. Each message acknowledged by the client increments the available message credit by one."),Object(s.b)("h2",{id:"configuring-message-credit-on-a-consumer"},"Configuring message credit on a consumer"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"ActiveMQ Artemis Client")," allows you to specify message credit via consumer configuration. By default, each new consumer is created with a message credit set to 200. This can be easily changed as follows:"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),"await using var consumerWithCustomCredit = await connection.CreateConsumerAsync(new ConsumerConfiguration\n{\n    Address = address,\n    RoutingType = RoutingType.Multicast,\n    Credit = 2 // Set message credit to 2\n});\n")),Object(s.b)("p",null,"Credit value has to be greater or equal to 1. Otherwise ",Object(s.b)("inlineCode",{parentName:"p"},"CreateConsumerAsync")," will throw ",Object(s.b)("inlineCode",{parentName:"p"},"ArgumentOutOfRangeException"),"."),Object(s.b)("div",{className:"admonition admonition-info alert alert--info"},Object(s.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(s.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(s.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"},"Message credit cannot be changed after the consumer has been created."))),Object(s.b)("p",null,"The above code snippet creates a consumer that can receive a maximum of 2 messages. If you don't acknowledge any of them, no further messages will be delivered by the broker."),Object(s.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(s.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(s.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(s.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"},"It is important to handle message acknowledgment properly in your application code, as ",Object(s.b)("em",{parentName:"p"},"lost")," messages can inexorably lead to running out of message credit and eventually block your consumers."))))}d.isMDXComponent=!0}}]);