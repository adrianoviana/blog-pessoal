(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"6MZL":function(e,a,t){},FRpb:function(e,a,t){"use strict";var c=t("Y3sT"),l=t("q1tI"),n=t.n(l),s=t("Wbzz"),r=(t("HDCr"),t("c3pP")),h=t.n(r),o=function(e){var a=e.author,t=e.tagline;return n.a.createElement("div",{className:"bio-main w-75"},n.a.createElement("img",{src:h.a,style:{maxWidth:"100px"},className:"profile-img",alt:""}),n.a.createElement("h3",{className:"mt-2 author-bio"},a),n.a.createElement("small",{className:"text-muted"},t))},i=t("ma3e"),m=function(e){var a=e.contacts;return n.a.createElement("div",{className:"side-social-links float-left mt-3 mb-3"},n.a.createElement("a",{className:"text-secondary p-2",href:"https://www.youtube.com/channel/UCPl-Y1ypgzViQQDxeI26fMQ?view_as=subscriber"},n.a.createElement("span",{title:"Youtube"},n.a.createElement(i.i,{size:26,style:{color:"secondary"}}))),n.a.createElement("a",{className:"text-secondary p-2",href:a.linkedin},n.a.createElement("span",{title:"Linked In"},n.a.createElement(i.e,{size:26,style:{color:"secondary"}}))),n.a.createElement("a",{className:"text-secondary p-2",href:a.github},n.a.createElement("span",{title:"GitHub"},n.a.createElement(i.d,{size:26,style:{color:"secondary"}}))),n.a.createElement("a",{className:"text-secondary p-2",href:a.stackoverflow},n.a.createElement("span",{title:"Stack Overflow"},n.a.createElement(i.f,{size:26,style:{color:"secondary"}}))),n.a.createElement("a",{className:"text-secondary p-2",href:a.twitter},n.a.createElement("span",{title:"Twitter"},n.a.createElement(i.h,{size:26,style:{color:"secondary"}}))))},v=(t("f3/d"),t("Z2Ku"),t("L9s1"),t("o+pQ")),z=function(e){var a=e.labels,t=e.posts,c=a.map((function(e){var a=0;return t.forEach((function(t){t.node.frontmatter.tags.includes(e.tag)&&(a+=1)})),[e.tag,a]})).filter((function(e){return e[1]>0})).map((function(e){return e[0]}));return n.a.createElement(n.a.Fragment,null,n.a.createElement("h4",null,"Tópicos"),n.a.createElement("div",{className:"d-block"},function(e){var t=[];return e.forEach((function(e,c){a.forEach((function(a){e===a.tag&&t.push(n.a.createElement(v.a,{key:c,tag:a.tag,tech:a.tech,name:a.name,size:a.size,color:a.color}))}))})),t}(c)))};a.a=function(){return n.a.createElement(s.StaticQuery,{query:"2783053702",render:function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"sidebar-main border-right"},n.a.createElement(o,{author:e.site.siteMetadata.author,tagline:e.site.siteMetadata.tagline}),n.a.createElement(m,{contacts:e.site.siteMetadata.contacts}),n.a.createElement("div",{className:"page-links"},n.a.createElement(s.Link,{to:"/"},n.a.createElement("span",{className:"text-dark d-block py-1"},"Início")),n.a.createElement(s.Link,{to:"/about"},n.a.createElement("span",{className:"text-dark d-block py-1"},"Sobre Mim")),n.a.createElement(s.Link,{to:"/archive"},n.a.createElement("span",{className:"text-dark d-block py-1"},"Arquivos do Blog"))),n.a.createElement("div",{className:"tech-tags mt-4"},n.a.createElement(z,{labels:e.site.siteMetadata.labels,posts:e.allMarkdownRemark.edges}))))},data:c})}},HDCr:function(e,a,t){},Y3sT:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Seja bem-vindo!","tagline":"Analista | Desenvolvedor | Nerd | Entusiasta da Ciência da Computação","author":"Adriano Viana","contacts":{"linkedin":"https://www.linkedin.com/in/vianaadriano/","github":"https://github.com/adrianoviana","stackoverflow":"https://stackoverflow.com/users/13654998/adriano-viana?tab=profile","twitter":"https://twitter.com/adriano_viana"},"labels":[{"tag":"react","tech":"React","name":"M12 9.861A2.139 2.139 0 1 0 12 14.139 2.139 2.139 0 1 0 12 9.861zM6.008 16.255l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.119.133.468a23.53 23.53 0 0 0 1.363 3.578l.101.213-.101.213a23.307 23.307 0 0 0-1.363 3.578l-.133.467zM5.317 8.95c-2.674.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046a24.95 24.95 0 0 1 1.182-3.046A24.752 24.752 0 0 1 5.317 8.95zM17.992 16.255l-.133-.469a23.357 23.357 0 0 0-1.364-3.577l-.101-.213.101-.213a23.42 23.42 0 0 0 1.364-3.578l.133-.468.473.119c3.517.889 5.535 2.398 5.535 4.14s-2.018 3.25-5.535 4.139l-.473.12zm-.491-4.259c.48 1.039.877 2.06 1.182 3.046 2.675-.752 4.315-1.901 4.315-3.046 0-1.146-1.641-2.294-4.315-3.046a24.788 24.788 0 0 1-1.182 3.046zM5.31 8.945l-.133-.467C4.188 4.992 4.488 2.494 6 1.622c1.483-.856 3.864.155 6.359 2.716l.34.349-.34.349a23.552 23.552 0 0 0-2.422 2.967l-.135.193-.235.02a23.657 23.657 0 0 0-3.785.61l-.472.119zm1.896-6.63c-.268 0-.505.058-.705.173-.994.573-1.17 2.565-.485 5.253a25.122 25.122 0 0 1 3.233-.501 24.847 24.847 0 0 1 2.052-2.544c-1.56-1.519-3.037-2.381-4.095-2.381zM16.795 22.677c-.001 0-.001 0 0 0-1.425 0-3.255-1.073-5.154-3.023l-.34-.349.34-.349a23.53 23.53 0 0 0 2.421-2.968l.135-.193.234-.02a23.63 23.63 0 0 0 3.787-.609l.472-.119.134.468c.987 3.484.688 5.983-.824 6.854a2.38 2.38 0 0 1-1.205.308zm-4.096-3.381c1.56 1.519 3.037 2.381 4.095 2.381h.001c.267 0 .505-.058.704-.173.994-.573 1.171-2.566.485-5.254a25.02 25.02 0 0 1-3.234.501 24.674 24.674 0 0 1-2.051 2.545zM18.69 8.945l-.472-.119a23.479 23.479 0 0 0-3.787-.61l-.234-.02-.135-.193a23.414 23.414 0 0 0-2.421-2.967l-.34-.349.34-.349C14.135 1.778 16.515.767 18 1.622c1.512.872 1.812 3.37.824 6.855l-.134.468zM14.75 7.24c1.142.104 2.227.273 3.234.501.686-2.688.509-4.68-.485-5.253-.988-.571-2.845.304-4.8 2.208A24.849 24.849 0 0 1 14.75 7.24zM7.206 22.677A2.38 2.38 0 0 1 6 22.369c-1.512-.871-1.812-3.369-.823-6.854l.132-.468.472.119c1.155.291 2.429.496 3.785.609l.235.02.134.193a23.596 23.596 0 0 0 2.422 2.968l.34.349-.34.349c-1.898 1.95-3.728 3.023-5.151 3.023zm-1.19-6.427c-.686 2.688-.509 4.681.485 5.254.987.563 2.843-.305 4.8-2.208a24.998 24.998 0 0 1-2.052-2.545 24.976 24.976 0 0 1-3.233-.501zM12 16.878c-.823 0-1.669-.036-2.516-.106l-.235-.02-.135-.193a30.388 30.388 0 0 1-1.35-2.122 30.354 30.354 0 0 1-1.166-2.228l-.1-.213.1-.213a30.3 30.3 0 0 1 1.166-2.228c.414-.716.869-1.43 1.35-2.122l.135-.193.235-.02a29.785 29.785 0 0 1 5.033 0l.234.02.134.193a30.006 30.006 0 0 1 2.517 4.35l.101.213-.101.213a29.6 29.6 0 0 1-2.517 4.35l-.134.193-.234.02c-.847.07-1.694.106-2.517.106zm-2.197-1.084c1.48.111 2.914.111 4.395 0a29.006 29.006 0 0 0 2.196-3.798 28.585 28.585 0 0 0-2.197-3.798 29.031 29.031 0 0 0-4.394 0 28.477 28.477 0 0 0-2.197 3.798 29.114 29.114 0 0 0 2.197 3.798z","size":20,"color":"deepskyblue"},{"tag":"nodejs","tech":"Node.js","name":"M11.177 25.3a1.94 1.94 0 0 1-.969-.259l-3.086-1.826c-.46-.257-.235-.349-.083-.402.614-.213.739-.262 1.394-.635.069-.038.159-.024.231.018l2.37 1.407a.304.304 0 0 0 .287 0l9.241-5.333a.292.292 0 0 0 .141-.25V7.355a.3.3 0 0 0-.143-.255l-9.237-5.329a.29.29 0 0 0-.285 0L1.803 7.102a.296.296 0 0 0-.146.253v10.666c0 .102.056.198.145.247l2.532 1.462c1.374.687 2.215-.122 2.215-.935V8.265c0-.149.12-.266.269-.266H7.99c.146 0 .267.117.267.266v10.53c0 1.833-.998 2.885-2.736 2.885-.534 0-.955 0-2.129-.579L.969 19.706A1.953 1.953 0 0 1 0 18.02V7.355c0-.693.371-1.339.969-1.684l9.242-5.34a2.023 2.023 0 0 1 1.942 0l9.241 5.34c.599.346.971.992.971 1.684V18.02c0 .693-.372 1.337-.971 1.686l-9.241 5.335a1.942 1.942 0 0 1-.973.259zm2.855-7.348c-4.045 0-4.892-1.857-4.892-3.414 0-.148.118-.266.266-.266h1.195c.133 0 .245.096.265.226.18 1.216.717 1.831 3.164 1.831 1.946 0 2.775-.441 2.775-1.473 0-.596-.234-1.037-3.26-1.334-2.528-.25-4.093-.809-4.093-2.831 0-1.865 1.572-2.977 4.207-2.977 2.961 0 4.425 1.027 4.611 3.233a.27.27 0 0 1-.267.291h-1.2a.266.266 0 0 1-.259-.209c-.288-1.28-.988-1.689-2.886-1.689-2.126 0-2.373.74-2.373 1.295 0 .673.292.869 3.161 1.248 2.84.375 4.19.907 4.19 2.902 0 2.014-1.678 3.167-4.606 3.167z","size":20,"color":"lightgreen"},{"tag":"git","tech":"Git","name":"M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187","size":20,"color":"white"},{"tag":"javascript","tech":"JavaScript","name":"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z","size":20,"color":"yellow"},{"tag":"css","tech":"CSS","name":"M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z","size":20,"color":"teal"},{"tag":"python","tech":"Python","name":"M14.31.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.83l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.23l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05L0 11.97l.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.24l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05 1.07.13zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09-.33.22zM21.1 6.11l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01.21.03zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08-.33.23z","size":20,"color":"deepskyblue"},{"tag":"ruby","tech":"Ruby","name":"M20.156.083c3.033.525 3.893 2.598 3.829 4.77L24 4.822 22.635 22.71 4.89 23.926h.016C3.433 23.864.15 23.729 0 19.139l1.645-3 2.819 6.586.503 1.172 2.805-9.144-.03.007.016-.03 9.255 2.956-1.396-5.431-.99-3.9 8.82-.569-.615-.51L16.5 2.114 20.159.073l-.003.01zM0 19.089v.026-.029.003zM5.13 5.073c3.561-3.533 8.157-5.621 9.922-3.84 1.762 1.777-.105 6.105-3.673 9.636-3.563 3.532-8.103 5.734-9.864 3.957-1.766-1.777.045-6.217 3.612-9.75l.003-.003z","size":20,"color":"crimson"},{"tag":"java","tech":"Java","name":"M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0-.001.553.457 3.393.639","size":20,"color":"wheat"},{"tag":"angular","tech":"Angular","name":"M9.93 12.645h4.134L11.996 7.74M11.996.009L.686 3.988l1.725 14.76 9.585 5.243 9.588-5.238L23.308 3.99 11.996.01zm7.058 18.297h-2.636l-1.42-3.501H8.995l-1.42 3.501H4.937l7.06-15.648 7.057 15.648z","size":20,"color":"red"},{"tag":"html","tech":"HTML","name":"M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z","size":20,"color":"darkorange"},{"tag":"php","tech":"php","name":"M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z","size":20,"color":"violet"},{"tag":"mongodb","tech":"MongoDB","name":"M17.18 9.518c-1.263-5.56-4.242-7.387-4.562-8.086C12.266.939 11.885 0 11.885 0c-.002.019-.004.031-.005.049v.013h-.001c-.002.015-.003.025-.004.039v.015h-.002c0 .01-.002.018-.002.026v.026h-.003c-.001.008-.001.018-.003.025v.021h-.002c0 .007 0 .015-.002.021v.02h-.002c0 .01-.001.022-.002.032v.002c-.003.017-.006.034-.009.05v.008h-.002c-.001.004-.003.008-.003.012v.017h-.003v.022h-.005v.018h-.005v.021h-.004v.019h-.004v.017h-.006v.014h-.004v.018h-.004v.014h-.005v.013H11.8v.015h-.004c-.001.001-.001.003-.001.004v.01h-.003c-.001.002-.001.004-.001.006v.006h-.002c-.001.003-.002.008-.002.01-.003.007-.007.014-.01.021v.002c-.002.002-.004.005-.005.007v.008h-.004v.008h-.005v.008h-.003v.01h-.006v.014h-.004v.004h-.004v.008h-.004v.011h-.004v.008h-.006v.011h-.004v.008h-.005v.008h-.003v.01h-.005v.008h-.004v.006h-.004v.008h-.006V.76h-.004v.006h-.005v.008h-.004v.011h-.005v.004h-.003v.008h-.006v.004h-.004v.01h-.004v.004h-.004v.008h-.005v.006h-.003l-.002.004v.004h-.002c-.001.002-.002.002-.002.004v.001h-.001c-.001.003-.002.005-.004.007v.003h-.001c-.005.006-.008.012-.012.018v.001c-.002.002-.007.006-.009.01v.002h-.001c-.001.001-.003.002-.003.003v.003h-.002l-.003.003v.001h-.001c0 .001-.002.002-.003.004v.004h-.003l-.002.002v.002h-.002c0 .002-.002.002-.002.003v.003h-.004c0 .001-.001.002-.002.003V.92h-.003v.004h-.004V.93h-.004v.008h-.005V.93h-.005v.004h-.004V.94h-.005v.008h-.005v.004h-.004v.006h-.004v.004h-.004V.97h-.006v.004h-.004V.98h-.005v.004h-.004v.005h-.005v.01h-.002v.004h-.006v.005h-.004v.002h-.004v.004h-.005v.01h-.004v.004h-.005v.004h-.004v.006h-.005v.004h-.005v.004h-.004v.004h-.004v.01h-.004v.005h-.006v.004h-.004v.004h-.005v.006h-.004v.004h-.005v.007h-.004v.004h-.006V1.1h-.002v.004h-.004v.004h-.005v.004h-.004v.006h-.005v.004h-.003c-.001.001-.001.002-.001.002v.002h-.002l-.004.004s-.002.002-.004.003v.006h-.004v.005h-.004v.004h-.004v.004h-.003l-.003.003v.003h-.002l-.002.002v.003h-.002c-.005.006-.007.01-.014.016-.002.002-.008.007-.012.01-.012.008-.027.021-.039.032-.008.005-.016.012-.022.017v.001h-.001c-.016.013-.031.025-.049.039v.001c-.024.02-.047.039-.074.062V1.34h-.002c-.057.047-.117.1-.186.159V1.5h-.001c-.169.148-.37.338-.595.568l-.015.015-.004.004C9 3.494 6.857 6.426 6.631 11.164c-.02.392-.016.773.006 1.144v.009c.109 1.867.695 3.461 1.428 4.756v.001c.292.516.607.985.926 1.405v.001c1.102 1.455 2.227 2.317 2.514 2.526.441 1.023.4 2.779.4 2.779l.644.215s-.131-1.701.053-2.522c.057-.257.192-.476.349-.662.106-.075.42-.301.797-.645.018-.019.028-.036.044-.054 1.521-1.418 4.362-4.91 3.388-10.599z","size":20,"color":"green"},{"tag":"vscode","tech":"VS Code","name":"M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z","size":20,"color":"deepskyblue"},{"tag":"graphql","tech":"GraphQL","name":"M14.051 2.751l4.935 2.85c.816-.859 2.173-.893 3.032-.077.148.14.274.301.377.477.589 1.028.232 2.339-.796 2.928-.174.1-.361.175-.558.223v5.699c1.146.273 1.854 1.423 1.58 2.569-.048.204-.127.4-.232.581-.592 1.023-1.901 1.374-2.927.782-.196-.113-.375-.259-.526-.429l-4.905 2.832c.372 1.124-.238 2.335-1.361 2.706-.217.071-.442.108-.67.108-1.181.001-2.139-.955-2.14-2.136 0-.205.029-.41.088-.609l-4.936-2.847c-.816.854-2.171.887-3.026.07-.854-.816-.886-2.171-.07-3.026.283-.297.646-.506 1.044-.603l.001-5.699c-1.15-.276-1.858-1.433-1.581-2.584.047-.198.123-.389.224-.566.592-1.024 1.902-1.374 2.927-.782.177.101.339.228.48.377l4.938-2.85C9.613 1.612 10.26.423 11.39.088 11.587.029 11.794 0 12 0c1.181-.001 2.139.954 2.14 2.134.001.209-.03.418-.089.617zm-.515.877c-.019.021-.037.039-.058.058l6.461 11.19c.026-.009.056-.016.082-.023V9.146c-1.145-.283-1.842-1.442-1.558-2.588.006-.024.012-.049.019-.072l-4.946-2.858zm-3.015.059l-.06-.06-4.946 2.852c.327 1.135-.327 2.318-1.461 2.645-.026.008-.051.014-.076.021v5.708l.084.023 6.461-11.19-.002.001zm2.076.507c-.39.112-.803.112-1.192 0l-6.46 11.189c.294.283.502.645.6 1.041h12.911c.097-.398.307-.761.603-1.044L12.597 4.194zm.986 16.227l4.913-2.838c-.015-.047-.027-.094-.038-.142H5.542l-.021.083 4.939 2.852c.388-.404.934-.653 1.54-.653.627 0 1.19.269 1.583.698z","size":20,"color":"hotpink"},{"tag":"gatsby","tech":"Gatsby","name":"M12.001.007C5.326.007.007 5.326.007 12S5.326 23.995 12 23.995s11.994-5.319 11.994-11.994S18.676.007 12.001.007zM2.614 12.105l9.283 9.283c-5.111 0-9.283-4.172-9.283-9.283zm11.473 9.074L2.823 9.915C3.76 5.743 7.516 2.614 12 2.614a9.476 9.476 0 0 1 7.614 3.86L18.259 7.62a7.657 7.657 0 0 0-6.362-3.337A7.555 7.555 0 0 0 4.7 9.393l9.804 9.805c2.4-.835 4.276-2.92 4.798-5.424h-4.068v-1.773h6.154c0 4.485-3.129 8.24-7.301 9.178z","size":20,"color":"rebeccapurple"},{"tag":"spring","tech":"Spring","name":"M21.822 1.248c-.338.806-.766 1.57-1.281 2.272A12.045 12.045 0 0012.03 0C5.431 0 0 5.43 0 12.031c0 3.293 1.35 6.445 3.737 8.717l.444.393a12.041 12.041 0 007.75 2.83c6.275 0 11.55-4.911 11.997-11.172.328-3.065-.572-6.941-2.106-11.55zM5.447 20.817c-.194.24-.49.38-.8.38a1.033 1.033 0 01-1.028-1.03c0-.564.465-1.03 1.028-1.03a1.032 1.032 0 01.8 1.68zm16.325-3.602c-2.969 3.954-9.31 2.622-13.375 2.812 0 0-.722.044-1.447.162 0 0 .272-.115.625-.25 2.853-.992 4.203-1.185 5.937-2.075 3.266-1.66 6.494-5.293 7.166-9.072-1.244 3.636-5.012 6.76-8.447 8.03-2.353.867-6.603 1.71-6.603 1.71l-.172-.09c-2.894-1.408-2.981-7.672 2.278-9.694 2.303-.886 4.507-.4 6.994-.992 2.656-.63 5.728-2.622 6.978-5.219 1.4 4.154 3.085 10.658.066 14.678z","size":20,"color":"green"},{"tag":"ionic","tech":"Ionic","name":"M22.922 7.027l-.103-.23-.169.188c-.408.464-.928.82-1.505 1.036l-.159.061.066.155a9.745 9.745 0 0 1 .75 3.759c0 5.405-4.397 9.806-9.806 9.806-5.409 0-9.802-4.397-9.802-9.802 0-5.405 4.402-9.806 9.806-9.806 1.467 0 2.883.319 4.2.947l.155.075.066-.155a3.767 3.767 0 0 1 1.106-1.453l.197-.159-.225-.117A11.905 11.905 0 0 0 12.001.001c-6.619 0-12 5.381-12 12s5.381 12 12 12 12-5.381 12-12c0-1.73-.361-3.403-1.078-4.973zM12 6.53A5.476 5.476 0 0 0 6.53 12 5.476 5.476 0 0 0 12 17.47 5.476 5.476 0 0 0 17.47 12 5.479 5.479 0 0 0 12 6.53zm10.345-2.007a2.494 2.494 0 1 1-4.988 0 2.494 2.494 0 0 1 4.988 0z","size":20,"color":"blue"},{"tag":"laravel","tech":"Laravel","name":"M23.644 5.43c.009.032.014.065.014.099v5.15c0 .135-.073.26-.189.326l-4.323 2.49v4.934c0 .135-.072.258-.188.326L9.931 23.95c-.021.012-.043.02-.066.027-.008.002-.016.008-.024.01-.063.018-.13.018-.192 0-.011-.002-.02-.008-.029-.012-.021-.008-.043-.014-.063-.025L.534 18.755c-.117-.068-.189-.191-.189-.326V2.974c0-.033.005-.066.014-.098.003-.012.01-.021.014-.032.006-.02.014-.04.023-.058.004-.013.015-.022.023-.033.012-.016.021-.031.033-.045.012-.01.025-.018.037-.027.014-.012.027-.024.041-.034h.001L5.044.05c.115-.067.259-.067.375 0l4.512 2.597h.002c.015.01.027.021.041.033.012.009.025.018.037.027.013.014.021.029.033.045.008.011.02.021.025.033.011.019.017.038.024.058.003.011.011.021.013.032.01.031.014.064.014.098v9.652l3.76-2.164V5.527c0-.033.005-.066.014-.098.003-.011.009-.021.013-.032.007-.02.014-.039.024-.059.007-.012.018-.021.025-.033.012-.015.021-.03.033-.043.012-.012.025-.02.037-.028.014-.011.026-.023.041-.032h.001l4.513-2.598c.116-.067.259-.067.375 0l4.513 2.598c.016.01.027.021.042.031.012.01.025.018.036.028.013.014.022.029.034.044.008.012.019.021.024.033.011.02.018.039.024.059.006.011.012.022.015.033zm-.74 5.032V6.179l-1.578.908-2.182 1.256v4.283l3.76-2.164zm-4.511 7.75v-4.287l-2.146 1.225-6.127 3.498v4.326l8.273-4.762zM1.095 3.624v14.588l8.273 4.762v-4.326l-4.322-2.445-.002-.003h-.002c-.014-.01-.025-.021-.04-.031-.011-.01-.024-.018-.035-.027l-.001-.002c-.013-.012-.021-.025-.031-.039-.01-.012-.021-.023-.028-.037h-.002c-.008-.014-.013-.031-.02-.047-.006-.016-.014-.027-.018-.043-.004-.018-.006-.037-.008-.057-.002-.014-.006-.027-.006-.041V5.789l-2.18-1.257-1.578-.908zM5.231.81l-3.76 2.164 3.76 2.164 3.758-2.164L5.231.81zm1.956 13.505l2.182-1.256V3.624l-1.58.909-2.182 1.256v9.435l1.58-.909zM18.769 3.364l-3.76 2.164 3.76 2.163 3.759-2.164-3.759-2.163zm-.376 4.979l-2.182-1.256-1.579-.908v4.283l2.182 1.256 1.579.908V8.343zm-8.65 9.654l5.514-3.148 2.756-1.572-3.757-2.163-4.324 2.489-3.941 2.27 3.752 2.124z","size":20,"color":"red"},{"tag":"algorithm","tech":"Algoritmos","name":"M12,0C5.372,0 0,5.373 0,12 0,18.628 5.372,24 12,24 18.627,24 24,18.628 24,12A12.014,12.014 0 0 0 23.527,8.657 0.6,0.6 0 0 0 22.4,9.066H22.398C22.663,10.009 22.8,10.994 22.8,12A10.73,10.73 0 0 1 19.637,19.637 10.729,10.729 0 0 1 12,22.8 10.73,10.73 0 0 1 4.363,19.637 10.728,10.728 0 0 1 1.2,12 10.73,10.73 0 0 1 4.363,4.363 10.728,10.728 0 0 1 12,1.2C14.576,1.2 17.013,2.096 18.958,3.74A1.466,1.466 0 1 0 19.82,2.9 11.953,11.953 0 0 0 12,0ZM10.56,5.88 6.36,16.782H8.99L9.677,14.934H13.646L12.927,12.892H10.314L12.014,8.201 15.038,16.781H17.669L13.47,5.88Z","size":20,"color":"red"},{"tag":"json","tech":"JSON","name":"M12.043 23.968c.479-.004.953-.029 1.426-.094 1.08-.138 2.143-.433 3.146-.863 1.409-.602 2.698-1.471 3.793-2.543 1.003-.989 1.842-2.151 2.44-3.427.509-1.097.869-2.274 1.02-3.476.149-1.16.135-2.346-.045-3.499-.149-.96-.419-1.896-.793-2.788-.24-.561-.525-1.101-.854-1.617-1.168-1.837-2.861-3.314-4.81-4.301-.693-.355-1.423-.645-2.172-.869h-.005c.119.063.24.132.345.201.12.074.239.146.351.225.569.385 1.094.827 1.559 1.33 1.063 1.145 1.797 2.548 2.218 4.041.284.982.434 1.998.495 3.017.044.743.044 1.491-.047 2.229-.149 1.27-.554 2.51-1.228 3.596-.495.803-1.14 1.519-1.903 2.084-1.244.928-2.877 1.482-4.436 1.114-.254-.061-.51-.146-.748-.258-.271-.124-.54-.277-.779-.449-.465-.311-.885-.685-1.244-1.106-.435-.52-.794-1.111-1.049-1.747-.314-.806-.479-1.672-.494-2.54-.03-1.273.225-2.553.854-3.67.42-.744.989-1.396 1.663-1.918.225-.178.464-.333.704-.479l.016-.007c-.466-.105-.96-.151-1.441-.12-.418.029-.823.105-1.228.239-.359.12-.704.271-1.019.45-.255.149-.508.315-.733.495-.211.18-.42.359-.615.555-1.123 1.153-1.768 2.682-2.022 4.256-.15.973-.15 1.961-.091 2.951.105 1.394.391 2.786.945 4.061.344.794.793 1.527 1.348 2.173.854.987 1.934 1.753 3.132 2.231.675.271 1.394.465 2.113.54.074.015.149.015.209.015l-.021-.032zm-2.934-.398c-.164-.07-.314-.149-.45-.228-.149-.083-.3-.168-.449-.259-.585-.362-1.108-.787-1.589-1.275-1.094-1.138-1.827-2.567-2.247-4.081-.284-1.034-.435-2.102-.495-3.172-.044-.703-.029-1.393.046-2.082.135-1.257.495-2.501 1.124-3.58.449-.794 1.063-1.498 1.783-2.053.494-.374 1.049-.69 1.633-.9.824-.299 1.708-.389 2.563-.27.33.045.658.121.959.225.029 0 .029 0 .045.03.015.015.045.015.06.03.045.016.104.045.165.074.239.12.479.271.704.42.899.629 1.633 1.498 2.097 2.502.42.914.615 1.934.631 2.938.014 1.079-.18 2.157-.645 3.146-.555 1.184-1.498 2.188-2.638 2.832.09.03.18.045.271.075.225.044.449.074.688.074 1.468.045 2.892-.659 3.94-1.647.195-.18.375-.375.54-.585.225-.27.435-.539.614-.823.239-.375.435-.75.614-1.154.226-.539.404-1.094.509-1.664.196-1.004.211-2.022.149-3.026-.135-2.022-.673-4.045-1.842-5.724-.18-.254-.359-.494-.555-.719-.329-.375-.689-.719-1.063-1.034-.42-.345-.885-.659-1.363-.915-.493-.223-1.078-.447-1.692-.598l-.3-.06c-.209-.03-.42-.044-.634-.06-.325-.015-.669-.01-1.015.016-.704.045-1.412.16-2.112.337-3.356.866-6.292 3.205-7.855 6.308C.799 7.657.445 8.714.238 9.8c-.239 1.243-.27 2.523-.104 3.775.12 1.02.374 2.023.778 2.977.227.57.511 1.124.825 1.648 1.094 1.783 2.683 3.236 4.51 4.24.688.391 1.408.69 2.157.945.226.074.45.149.689.209l.016-.024z","size":20,"color":"white"},{"tag":"postman","tech":"Postman","name":"M13.527.099C6.955-.744.942 3.9.099 10.473c-.843 6.572 3.8 12.584 10.373 13.428 6.573.843 12.587-3.801 13.428-10.374C24.744 6.955 20.101.943 13.527.099zm2.471 7.485a.855.855 0 0 0-.593.25l-4.453 4.453-.307-.307-.643-.643c4.389-4.376 5.18-4.418 5.996-3.753zm-4.863 4.861l4.44-4.44a.62.62 0 1 1 .847.903l-4.699 4.125-.588-.588zm.33.694l-1.1.238a.06.06 0 0 1-.067-.032.06.06 0 0 1 .01-.073l.645-.645.512.512zm-2.803-.459l1.172-1.172.879.878-1.979.426a.074.074 0 0 1-.085-.039.072.072 0 0 1 .013-.093zm-3.646 6.058a.076.076 0 0 1-.069-.083.077.077 0 0 1 .022-.046h.002l.946-.946 1.222 1.222-2.123-.147zm2.425-1.256a.228.228 0 0 0-.117.256l.203.865a.125.125 0 0 1-.211.117h-.003l-.934-.934-.294-.295 3.762-3.758 1.82-.393.874.874c-1.255 1.102-2.971 2.201-5.1 3.268zm5.279-3.428h-.002l-.839-.839 4.699-4.125a.952.952 0 0 0 .119-.127c-.148 1.345-2.029 3.245-3.977 5.091zm3.657-6.46l-.003-.002a1.822 1.822 0 0 1 2.459-2.684l-1.61 1.613a.119.119 0 0 0 0 .169l1.247 1.247a1.817 1.817 0 0 1-2.093-.343zm2.578 0a1.714 1.714 0 0 1-.271.218h-.001l-1.207-1.207 1.533-1.533c.661.72.637 1.832-.054 2.522zM18.855 6.05a.143.143 0 0 0-.053.157.416.416 0 0 1-.053.45.14.14 0 0 0 .023.197.141.141 0 0 0 .084.03.14.14 0 0 0 .106-.05.691.691 0 0 0 .087-.751.138.138 0 0 0-.194-.033z","size":20,"color":"red"},{"tag":"typescript","tech":"Typescript","name":"M0 12v12h24V0H0zm19.341-.956c.61.152 1.074.423 1.501.865.221.236.549.666.575.77.008.03-1.036.73-1.668 1.123-.023.015-.115-.084-.217-.236-.31-.45-.633-.644-1.128-.678-.728-.05-1.196.331-1.192.967a.88.88 0 0 0 .102.45c.16.331.458.53 1.39.933 1.719.74 2.454 1.227 2.911 1.92.51.773.625 2.008.278 2.926-.38.998-1.325 1.676-2.655 1.9-.411.073-1.386.062-1.828-.018-.964-.172-1.878-.648-2.442-1.273-.221-.243-.652-.88-.625-.925.011-.016.11-.077.22-.141.108-.061.511-.294.892-.515l.69-.4.145.214c.202.308.643.731.91.872.766.404 1.817.347 2.335-.118a.883.883 0 0 0 .313-.72c0-.278-.035-.4-.18-.61-.186-.266-.567-.49-1.649-.96-1.238-.533-1.771-.864-2.259-1.39a3.165 3.165 0 0 1-.659-1.2c-.091-.339-.114-1.189-.042-1.531.255-1.197 1.158-2.03 2.461-2.278.423-.08 1.406-.05 1.821.053zm-5.634 1.002l.008.983H10.59v8.876H8.38v-8.876H5.258v-.964c0-.534.011-.98.026-.99.012-.016 1.913-.024 4.217-.02l4.195.012z","size":20,"color":"blue"}]}},"allMarkdownRemark":{"edges":[{"node":{"frontmatter":{"tags":["java","spring","postman","json"]}}},{"node":{"frontmatter":{"tags":["python","vscode","algorithm"]}}},{"node":{"frontmatter":{"tags":["java","spring","postman","json"]}}},{"node":{"frontmatter":{"tags":["ionic","angular","typescript","html","css","javascript","vscode","nodejs"]}}},{"node":{"frontmatter":{"tags":["python","vscode","algorithm"]}}},{"node":{"frontmatter":{"tags":["java","spring","postman","json"]}}},{"node":{"frontmatter":{"tags":["ionic","angular","typescript","html","css","javascript","vscode","nodejs"]}}},{"node":{"frontmatter":{"tags":["python","vscode","algorithm"]}}},{"node":{"frontmatter":{"tags":["ionic","angular","typescript","html","css","javascript","vscode","nodejs"]}}}]}}}')},"o+pQ":function(e,a,t){"use strict";t("f3/d");var c=t("q1tI"),l=t.n(c),n=(t("6MZL"),t("Wbzz"));a.a=function(e){var a=e.tag,t=e.tech,c=e.name,s=e.size,r=e.color;return l.a.createElement("div",{className:"d-inline-block p-1"},l.a.createElement(n.Link,{to:"/tags/"+a+"/"},l.a.createElement("button",{className:"tech-tag text-white"},l.a.createElement("p",{className:"d-inline"},t," "),l.a.createElement("div",{className:"d-inline",style:{fontSize:s,color:r}},l.a.createElement("svg",{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",width:s,height:s,style:{fill:""+r}},l.a.createElement("title",null,t),l.a.createElement("path",{d:c}))))))}}}]);
//# sourceMappingURL=4c9cd4c975972a2c5370d674b1200089eec6b4d0-a815bd01d8ba727539fc.js.map