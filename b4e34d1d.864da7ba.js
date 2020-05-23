(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{139:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return l}));var n=a(2),s=a(9),i=(a(0),a(151)),r={id:"message-durability",title:"Message Durability Modes",sidebar_label:"Message Durability"},o={id:"message-durability",title:"Message Durability Modes",description:"ActiveMQ Artemis supports two types of durability modes for messages: durable and nondurable. By default each message sent by the client using SendAsync method is durable. That means that the broker actually has to persist the message on the disk before the confirmation frame (ack) will be sent back to the client. The confirmation frame is what we can await for.",source:"@site/../docs/message-durability.md",permalink:"/dotnet-activemq-artemis-client/docs/message-durability",editUrl:"https://github.com/Havret/dotnet-activemq-artemis-client/edit/master/website/../docs/message-durability.md",sidebar_label:"Message Durability",sidebar:"someSidebar",previous:{title:"Message payload",permalink:"/dotnet-activemq-artemis-client/docs/message-payload"},next:{title:"Message Priority",permalink:"/dotnet-activemq-artemis-client/docs/message-priority"}},c=[],d={rightToc:c};function l(e){var t=e.components,a=Object(s.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"ActiveMQ Artemis supports two types of durability modes for messages: ",Object(i.b)("inlineCode",{parentName:"p"},"durable")," and ",Object(i.b)("inlineCode",{parentName:"p"},"nondurable"),". By default each message sent by the client using ",Object(i.b)("inlineCode",{parentName:"p"},"SendAsync")," method is durable. That means that the broker actually has to persist the message on the disk before the confirmation frame (ack) will be sent back to the client. The confirmation frame is what we can ",Object(i.b)("em",{parentName:"p"},"await")," for."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),'await producer.SendAsync(new Message("foo")\n')),Object(i.b)("p",null,"When ",Object(i.b)("inlineCode",{parentName:"p"},"SendAsync")," completes without errors we may expect that the message will be delivered with ",Object(i.b)("em",{parentName:"p"},"at least once")," semantics. Durable messages incur more overhead due to the need to store the message, and value reliability over performance."),Object(i.b)("p",null,"Setting message durability mode to ",Object(i.b)("inlineCode",{parentName:"p"},"Nondurable")," instructs the broker not to persist the message. By default each message sent by the client using ",Object(i.b)("inlineCode",{parentName:"p"},"Send")," method is nondurable. ",Object(i.b)("inlineCode",{parentName:"p"},"Send")," is non-blocking both in terms of packets transmission (it uses ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/dotnet/api/system.net.sockets.socket.sendasync"}),"Socket.SendAsync")," method in the fire and forget manner) and in terms of waiting for confirmation from the broker (it doesn't). As a result, ",Object(i.b)("em",{parentName:"p"},"at most once")," is all that you can expect in terms of message delivery guarantees from this combination. Nondurable messages incur less overhead and value performance over reliability."),Object(i.b)("p",null,"Default message durability settings may be overridden via producer configuration:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),'var producer = await connection.CreateProducerAsync(new ProducerConfiguration\n{\n    Address = "a1",\n    RoutingType = AddressRoutingType.Anycast,\n    MessageDurabilityMode = DurabilityMode.Nondurable\n});\n')),Object(i.b)("p",null,"And for each message individually:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),'await producer.SendAsync(new Message("foo")\n{\n    DurabilityMode = DurabilityMode.Nondurable // takes precedence over durability\n                                               // mode specified on the producer level\n});\n')))}l.isMDXComponent=!0}}]);