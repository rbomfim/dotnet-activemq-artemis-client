(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{64:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return a})),i.d(t,"metadata",(function(){return n})),i.d(t,"rightToc",(function(){return c})),i.d(t,"default",(function(){return d}));var r=i(2),s=i(6),o=(i(0),i(72)),a={id:"message-priority",title:"Message Priority",sidebar_label:"Message Priority"},n={unversionedId:"message-priority",id:"message-priority",isDocsHomePage:!1,title:"Message Priority",description:"This property defines the level of importance of a message. ActiveMQ Artemis uses it to prioritize message delivery. Messages with higher priority will be delivered before messages with lower priority. Messages with the same priority level should be delivered according to the order they were sent with. There are 10 levels of message priority, ranging from 0 (the lowest) to 9 (the highest). If no message priority is set on the client (Priority set to null), the message will be treated as if it was assigned a normal priority (4).",source:"@site/../docs/message-priority.md",permalink:"/dotnet-activemq-artemis-client/docs/message-priority",editUrl:"https://github.com/Havret/dotnet-activemq-artemis-client/edit/master/website/../docs/message-priority.md",sidebar_label:"Message Priority",sidebar:"someSidebar",previous:{title:"Message Durability Modes",permalink:"/dotnet-activemq-artemis-client/docs/message-durability"},next:{title:"Consumer credit",permalink:"/dotnet-activemq-artemis-client/docs/consumer-credit"}},c=[],l={rightToc:c};function d(e){var t=e.components,i=Object(s.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This property defines the level of importance of a message. ActiveMQ Artemis uses it to prioritize message delivery. Messages with higher priority will be delivered before messages with lower priority. Messages with the same priority level should be delivered according to the order they were sent with. There are 10 levels of message priority, ranging from 0 (the lowest) to 9 (the highest). If no message priority is set on the client (Priority set to ",Object(o.b)("inlineCode",{parentName:"p"},"null"),"), the message will be treated as if it was assigned a normal priority (4)."),Object(o.b)("p",null,"Default message priority can be overridden on message producer level:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-csharp"}),'var producer = await connection.CreateProducerAsync(new ProducerConfiguration\n{\n    Address = "a1",\n    RoutingType = RoutingType.Anycast,\n    MessagePriority = 9\n});\n')),Object(o.b)("p",null,"Each message sent with this producer will automatically have priority set to ",Object(o.b)("inlineCode",{parentName:"p"},"9")," unless specified otherwise. The priority set explicitly on the message object takes the precedence."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-csharp"}),'await producer.SendAsync(new Message("foo")\n{\n    Priority = 0 // takes precedence over priority specified on producer level\n});\n')))}d.isMDXComponent=!0}}]);