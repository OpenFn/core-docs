(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[4556],{44912:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var a=n(22122),i=n(19756),r=(n(67294),n(3905)),o=n(22004),l={title:"Devtools"},s={unversionedId:"devtools/home",id:"devtools/home",isDocsHomePage:!1,title:"Devtools",description:"Un ensemble d'outils pour \xe9crire & tester des expressions, g\xe9rer des projets OpenFn, et d\xe9velopper de nouveaux adaptateurs.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/devtools/home.md",sourceDirName:"devtools",slug:"/devtools/home",permalink:"/fr/documentation/devtools/home",editUrl:"https://github.com/openfn/docs/edit/main/docs/devtools/home.md",version:"current",frontMatter:{title:"Devtools"},sidebar:"docs",previous:{title:"Sources de donn\xe9es g\xe9n\xe9riques",permalink:"/fr/documentation/source-apps"},next:{title:"Adaptateurs",permalink:"/fr/documentation/build/adaptors"}},u=[{value:"Op\xe9rationnel",id:"op\xe9rationnel",children:[]},{value:"Utilisation",id:"utilisation",children:[{value:"Utilisation de bash",id:"utilisation-de-bash",children:[]},{value:"L&#39;option <code>--test</code>",id:"loption---test",children:[]}]},{value:"Configurer un projet OpenFn",id:"configurer-un-projet-openfn",children:[]},{value:"Pr\xe9-requis",id:"pr\xe9-requis",children:[]},{value:"Scripts",id:"scripts",children:[{value:"bootstrap",id:"bootstrap",children:[]},{value:"generate-project.js",id:"generate-projectjs",children:[]},{value:"generate-doclets",id:"generate-doclets",children:[]},{value:"analyse-doclets",id:"analyse-doclets",children:[]},{value:"bundle",id:"bundle",children:[]},{value:"bundle-all",id:"bundle-all",children:[]},{value:"upload-release",id:"upload-release",children:[]}]},{value:"Sortie d&#39;une nouvelle version d&#39;adaptateur pour la production",id:"sortie-dune-nouvelle-version-dadaptateur-pour-la-production",children:[]},{value:"Utilisation d&#39;un nouvel adaptateur dans une instance OpenFn/plateforme",id:"utilisation-dun-nouvel-adaptateur-dans-une-instance-openfnplateforme",children:[]}],p={toc:u};function d(e){var t=e.components,l=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Un ensemble d'outils pour \xe9crire & tester des expressions, g\xe9rer des projets OpenFn, et d\xe9velopper de nouveaux adaptateurs."),(0,r.kt)(o.Z,{url:"https://www.youtube.com/watch?v=fkGI5YLp18s",mdxType:"ReactPlayer"}),(0,r.kt)("h2",{id:"op\xe9rationnel"},"Op\xe9rationnel"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Assurez-vous que vous avez ",(0,r.kt)("a",{parentName:"li",href:"https://git-scm.com/downloads"},"git")," (peut-\xeatre GitBash pour Windows\xa0?)"),(0,r.kt)("li",{parentName:"ol"},"Et ",(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"Node.js")," (version 12 ou plus)"),(0,r.kt)("li",{parentName:"ol"},"Ex\xe9cutez ",(0,r.kt)("inlineCode",{parentName:"li"},"git clone git@github.com:OpenFn/devtools.git")," de SSH ou ",(0,r.kt)("inlineCode",{parentName:"li"},"git clone https://github.com/OpenFn/devtools.git")),(0,r.kt)("li",{parentName:"ol"},"Ex\xe9cutez ",(0,r.kt)("inlineCode",{parentName:"li"},"cd devtools")),(0,r.kt)("li",{parentName:"ol"},"Ex\xe9cutez ",(0,r.kt)("inlineCode",{parentName:"li"},"./install.sh ssh")," ou ",(0,r.kt)("inlineCode",{parentName:"li"},"./install.sh https")," pour installer core, language-common et language-http")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Remarque : Si vous obtenez un message \xab permission refus\xe9e\xa0\xbb lorsque vous ex\xe9cutez ",(0,r.kt)("inlineCode",{parentName:"em"},"./install.sh"),", essayez ",(0,r.kt)("inlineCode",{parentName:"em"},"run chmod +x ./install.sh")," puis r\xe9essayez la commande d'installation.")),(0,r.kt)("p",null,"Pour installer des adaptateurs sp\xe9cifiques, ex\xe9cutez ",(0,r.kt)("inlineCode",{parentName:"p"},"./install.sh ${ssh || https} language-${name}")),(0,r.kt)("p",null,"Vous pouvez ex\xe9cuter core depuis n'importe o\xf9 en utilisant ",(0,r.kt)("inlineCode",{parentName:"p"},"npm install -g @openfn/core")," pour une installation globale ."),(0,r.kt)("h2",{id:"utilisation"},"Utilisation"),(0,r.kt)("p",null,"L'ex\xe9cution se fait en prenant\xa0:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"-l [language-package].Adaptor"),": L'adaptateur \xe9tant utilis\xe9"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"-e [expression.js]:")," L'expression en cours de test"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"-s [state.json]"),": Le message ",(0,r.kt)("inlineCode",{parentName:"li"},"donn\xe9es : {...}")," et ",(0,r.kt)("inlineCode",{parentName:"li"},"configuration : {...}")," du credential"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"-o [output.json]"),": Le fichier dans lequel la sortie sera \xe9crite")),(0,r.kt)("h3",{id:"utilisation-de-bash"},"Utilisation de bash"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"~/devtools/core/bin/core execute \\\n  -l ~/devtools/adaptors/language-http \\\n  -s ./tmp/state.json \\\n  -o ./tmp/output.json \\\n  -e ./tmp/expression.js\n")),(0,r.kt)("h3",{id:"loption---test"},"L'option ",(0,r.kt)("inlineCode",{parentName:"h3"},"--test")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"~/devtools/core/bin/core execute \\\n  -l ~/devtools/adaptors/language-http \\\n  -s ./tmp/state.json \\\n  -o ./tmp/output.json \\\n  -e ./tmp/expression.js \\\n  --test\n")),(0,r.kt)("p",null,"Cela intercepte toutes les requ\xeates HTTP et affiche les informations de requ\xeate pour le d\xe9bogage."),(0,r.kt)("h4",{id:"fakeadaptor"},(0,r.kt)("inlineCode",{parentName:"h4"},".FakeAdaptor")),(0,r.kt)("p",null,"Les adaptateurs peuvent fournir des modules factices pour les tests. ",(0,r.kt)("inlineCode",{parentName:"p"},"language-salesforce")," a un int\xe9gr\xe9 ",(0,r.kt)("inlineCode",{parentName:"p"},".FakeAdaptor")," qui permet \xe0 un utilisateur de tester des expressions sur des donn\xe9es sans les envoyer \xe0 un v\xe9ritable serveur Salesforce."),(0,r.kt)("p",null,"Au lieu d'utiliser ",(0,r.kt)("inlineCode",{parentName:"p"},"-l ./language-salesforce.Adaptor"),", utilisez ",(0,r.kt)("inlineCode",{parentName:"p"},"-l./language-salesforce.FakeAdaptor")," pour tester les expressions hors ligne : ",(0,r.kt)("inlineCode",{parentName:"p"},"./core/bin/core execute -l ./language-salesforce.FakeAdaptor -s ./tmp/state.json -o ./tmp/output.json -e ./tmp/expression.js")),(0,r.kt)("h4",{id:"tests-hors-ligne-pour-dautres-adaptateurs"},"Tests hors ligne pour d'autres adaptateurs"),(0,r.kt)("p",null,"Pour la plupart des adaptateurs standards qui utilisent les requ\xeates HTTP, vous pouvez ajouter ",(0,r.kt)("inlineCode",{parentName:"p"},"--test")," \xe0 la commande execute pour intercepter toutes les requ\xeates HTTP et retourner un ",(0,r.kt)("inlineCode",{parentName:"p"},"200"),"."),(0,r.kt)("h2",{id:"configurer-un-projet-openfn"},"Configurer un projet OpenFn"),(0,r.kt)("p",null,"Vous pouvez utiliser les fichiers de configuration du projet YAML pour d\xe9finir des projets \xe0 la fois sur ",(0,r.kt)("a",{parentName:"p",href:"https://docs.openfn.org/documentation/deploy/platform"},"OpenFn platform")," et dans ",(0,r.kt)("a",{parentName:"p",href:"https://openfn.github.io/microservice/readme.html#content"},"OpenFn microservice"),". L'ex\xe9cution de ",(0,r.kt)("inlineCode",{parentName:"p"},"./scripts/generate-project.js")," vous aide \xe0 construire une configuration de projet YAML interactivement, en ajoutant vos triggers, credentials et jobs \xe0 la configuration. Vous pouvez en savoir plus sur le fichier de configuration ",(0,r.kt)("a",{parentName:"p",href:"https://openfn.github.io/microservice/readme.html#sample-configuration"},"ici")),(0,r.kt)("p",null,"Si vous choisissez le mode ",(0,r.kt)("inlineCode",{parentName:"p"},"monolith"),", tout votre code job sera inclus dans le YAML. En mode ",(0,r.kt)("inlineCode",{parentName:"p"},"URI"),", vous obtiendrez un fichier de configuration avec les URI de vos jobs d\xe9finies."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"G\xe9n\xe9rer un projet",src:n(96392).Z})),(0,r.kt)("h2",{id:"pr\xe9-requis"},"Pr\xe9-requis"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download/"},"Node")," est n\xe9cessaire pour ex\xe9cuter des jobs et utiliser de nombreux scripts dans Devtools.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"http://www.gnu.org/software/make/"},"Make")," est utilis\xe9 pour que notre JavaScript moderne (es9) puisse \xeatre ex\xe9cut\xe9 sur d'anciens runtimes de Node. Pour l'installer et d'autres outils de build , vous pouvez ex\xe9cuter ",(0,r.kt)("inlineCode",{parentName:"p"},"sudo apt-get install build-essential"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Une connaissance pratique de base de NodeJs, promises et des fonctions asynchrones est essentielle pour \xe9crire des adaptateurs."))),(0,r.kt)("h2",{id:"scripts"},"Scripts"),(0,r.kt)("p",null,"Devtools est fourni avec une collection de scripts pour aider \xe0 mettre en place un environnement de d\xe9veloppement pour le travail sur les adaptateurs, et inclus des commandes pour cloner rapidement un grand nombre d'adaptateurs, cr\xe9er des archives d'adaptateurs avec seulement les d\xe9pendances de production incluses, etc."),(0,r.kt)("p",null,"Pour la kitchen sink, ex\xe9cutez\xa0:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"./install ssh\n./scripts/bootstrap npm-install\n")),(0,r.kt)("p",null,"Afin d'ex\xe9cuter les scripts, assurez-vous que vous avez cd'd dans le r\xe9pertoire du projet et entrez ",(0,r.kt)("inlineCode",{parentName:"p"},"./scripts/<script-name>")),(0,r.kt)("h3",{id:"bootstrap"},"bootstrap"),(0,r.kt)("p",null,"Installe tous les adaptateurs dans le fichier ",(0,r.kt)("inlineCode",{parentName:"p"},"repos")," du r\xe9pertoire ",(0,r.kt)("inlineCode",{parentName:"p"},"/adaptors")," et pr\xe9pare le r\xe9pertoire de travail. Il doit \xeatre ex\xe9cut\xe9 avant tout autre script. Passez ",(0,r.kt)("inlineCode",{parentName:"p"},"npm-install")," pour ex\xe9cuter npm install pour chaque adaptateur \xe9galement."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"./scripts/bootstrap npm-install")," - pour cloner, mettre en place les hooks et npm install dans chaque ",(0,r.kt)("inlineCode",{parentName:"p"},"./scripts/bootstrap"),"- pour cloner et mettre en place les hooks dans chaque"),(0,r.kt)("h3",{id:"generate-projectjs"},"generate-project.js"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"./scripts/generate-project.js")," g\xe9n\xe8re interactivement un fichier de configuration de projet YAML qui peut \xeatre utilis\xe9 \xe0 la fois sur la plate-forme OpenFn et dans OpenFn microservice pour d\xe9finir des projets."),(0,r.kt)("h3",{id:"generate-doclets"},"generate-doclets"),(0,r.kt)("p",null,"It\xe8re sur tous les noms de dossiers de packs de langue trouv\xe9s dans la liste ",(0,r.kt)("inlineCode",{parentName:"p"},"repos")," et cr\xe9e un fichier doclet json dans le r\xe9pertoire ",(0,r.kt)("inlineCode",{parentName:"p"},"doclets"),"."),(0,r.kt)("h3",{id:"analyse-doclets"},"analyse-doclets"),(0,r.kt)("p",null,"It\xe8re sur tous les doclets trouv\xe9s dans ",(0,r.kt)("inlineCode",{parentName:"p"},"doclets")," et donne une vue arborescente de la structure des doclets en utilisant ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/jsdoc-query"},"jsdoc-query"),"."),(0,r.kt)("h3",{id:"bundle"},"bundle"),(0,r.kt)("p",null,"Cr\xe9e une archive tar avec toutes les d\xe9pendances de production install\xe9es pour un module donn\xe9."),(0,r.kt)("p",null,"Exemple: ",(0,r.kt)("inlineCode",{parentName:"p"},"./scripts/bundle-node language-common -o builds")," cr\xe9e un fichier ",(0,r.kt)("inlineCode",{parentName:"p"},"language-common-v1.0.0.tgz")," dans le r\xe9pertoire \xab\xa0builds\xa0\xbb."),(0,r.kt)("p",null,"Arguments ",(0,r.kt)("inlineCode",{parentName:"p"},"./scripts/bundle-node <language> -o <output folder> -d")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-o")," - Dossier de sortie"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-d")," - D\xe9boguer"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--no-ast")," - Ne pas construire et inclure une AST pour qu'OpenFn.org puisse l'analyser")),(0,r.kt)("h3",{id:"bundle-all"},"bundle-all"),(0,r.kt)("p",null,"Ex\xe9cute ",(0,r.kt)("inlineCode",{parentName:"p"},"bundle")," pour tous les d\xe9p\xf4ts trouv\xe9s dans la liste, et les envoie dans le dossier des ",(0,r.kt)("inlineCode",{parentName:"p"},"builds")," ."),(0,r.kt)("h3",{id:"upload-release"},"upload-release"),(0,r.kt)("p",null,"T\xe9l\xe9charge une archive tar vers une version Github."),(0,r.kt)("p",null,"Exemple\xa0:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"GH_TOKEN=<oauth-token> \\\n  ./scripts/upload-release -i ./builds/language-common-v0.0.0.tgz\n")),(0,r.kt)("p",null,"D\xe9duit le nom du d\xe9p\xf4t et le num\xe9ro de version \xe0 partir du fichier."),(0,r.kt)("p",null,"Arguments ",(0,r.kt)("inlineCode",{parentName:"p"},"./scripts/upload-release -i <file> [-u]")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"i")," - Chemin du fichier build \xe0 t\xe9l\xe9charger"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"u")," - Mettre \xe0 jour un fichier s'il existe d\xe9j\xe0 (et a une taille diff\xe9rente)")),(0,r.kt)("h2",{id:"sortie-dune-nouvelle-version-dadaptateur-pour-la-production"},"Sortie d'une nouvelle version d'adaptateur pour la production"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Retourner la version dans ",(0,r.kt)("inlineCode",{parentName:"strong"},"package.json"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Ex\xe9cutez ",(0,r.kt)("inlineCode",{parentName:"strong"},"npm install"))," pour mettre \xe0 jour ",(0,r.kt)("inlineCode",{parentName:"li"},"package-lock.json")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Valider")," et \xe9tiqueter votre version avec ",(0,r.kt)("inlineCode",{parentName:"li"},"git\xa0tag"),". ",(0,r.kt)("em",{parentName:"li"},"N.B., ceci est g\xe9r\xe9 avec un git hook fourni par ",(0,r.kt)("inlineCode",{parentName:"em"},"bootstrap"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Pousser les validations et les tags sur GitHub")," avec ",(0,r.kt)("inlineCode",{parentName:"li"},"git push && git push --tags")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Cr\xe9er une sortie")," sur le d\xe9p\xf4t associ\xe9 sur Github, en s\xe9lectionnant le tag de version qui a \xe9t\xe9 pouss\xe9e lors de la derni\xe8re \xe9tape. R\xe9digez un titre et des notes de publication si n\xe9cessaire, puis cliquez sur \xab\xa0Publish release\xa0\xbb."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Retourner au r\xe9pertoire devtools")," avec ",(0,r.kt)("inlineCode",{parentName:"li"},"cd ../../")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Regrouper le module")," avec ",(0,r.kt)("inlineCode",{parentName:"li"},"./scripts/bundle-node ./adaptors/<language-pack> -o builds")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"V\xe9rifiez que l'archive a \xe9t\xe9 cr\xe9\xe9e")," dans ",(0,r.kt)("inlineCode",{parentName:"li"},"builds")," avec la convention de nom\xa0: ",(0,r.kt)("inlineCode",{parentName:"li"},"<language-pack>-<version>.tgz")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"T\xe9l\xe9chargez le build")," en utilisant le script ",(0,r.kt)("inlineCode",{parentName:"li"},"upload-release"),"\xa0: ",(0,r.kt)("inlineCode",{parentName:"li"},"./scripts/upload-release -i builds/<file>"))),(0,r.kt)("p",null,"Si le mauvais fichier a \xe9t\xe9 t\xe9l\xe9charg\xe9 ou si vous voulez remplacer le build sur Github, alors utilisez la marque ",(0,r.kt)("inlineCode",{parentName:"p"},"-u")," qui supprime le build de Github si la taille du fichier est diff\xe9rente."),(0,r.kt)("p",null,"Remarquez que ce script attend une variable d'environnement ",(0,r.kt)("inlineCode",{parentName:"p"},"GH_TOKEN")," env , qui est un jeton OAuth2 que vous devez obtenir de Github (via la page du compte)"),(0,r.kt)("h2",{id:"utilisation-dun-nouvel-adaptateur-dans-une-instance-openfnplateforme"},"Utilisation d'un nouvel adaptateur dans une instance OpenFn/plateforme"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Ajoutez votre version au script ",(0,r.kt)("inlineCode",{parentName:"li"},"scripts/install-lp"),"."),(0,r.kt)("li",{parentName:"ol"},"Ajoutez le num\xe9ro de version \xe0 ",(0,r.kt)("inlineCode",{parentName:"li"},"priv/adaptors.json"),"."),(0,r.kt)("li",{parentName:"ol"},"Ajoutez le ",(0,r.kt)("inlineCode",{parentName:"li"},"bodySchema")," \xe0 ",(0,r.kt)("inlineCode",{parentName:"li"},"CredentialView.js"),".")))}d.isMDXComponent=!0},96392:function(e,t,n){"use strict";t.Z=n.p+"assets/images/generate-project-40444c4a75e8e0b63a1cbe1e02d7f49d.gif"}}]);