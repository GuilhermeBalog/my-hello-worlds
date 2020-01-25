const languages = [
	{
		name: "HTML",
		extension: "html",
		code: "&lt;<span class='pink'>html</span>&gt;\n\t&lt;<span class='pink'>head</span>&gt;\n\t\t&lt;<span class='pink'>title</span>&gt;Hello World!&lt;/<span class='pink'>title</span>&gt;\n\t&lt;/<span class='pink'>head</span>&gt;\n\t&lt;<span class='pink'>body</span>&gt;\n\t\t&lt;<span class='pink'>h1</span>&gt;Hello World!&lt;/<span class='pink'>h1</span>&gt;\n\t&lt;/<span class='pink'>body</span>&gt;\n&lt;/<span class='pink'>html</span>&gt;\n",
		color: "#e34c26"
	},
	{
		name: "CSS",
		extension: "css",
		code: "<span class='green'>.title</span>:after{\n\t<i class='blue'>content</i>: <span class='yellow'>'Hello World!'</span>;\n}",
		color: "#563d7c"
	},
	{
		name: "JavaScript",
		extension: "js",
		code: "<i class='blue'>let</i> msg <span class='pink'>=</span> <span class='yellow'>\"Hello World!\"</span>\n<i class='blue'>console</i>.<span class='blue'>log</span>(msg)",
		color: "#f1e05a"
	},
	{
		name: "Python",
		extension: "py",
		code: "msg <span class='pink'>=</span> <span class='yellow'>\"Hello World!\"</span>\n<span class='blue'>print</span>(msg)",
		color: "#3572a5"
	},
	{
		name: "C++",
		extension: "cpp",
		code: "<span class='pink'>#include</span> <span class='yellow'>&lt;iostream&gt;</span>\n<span class='pink'>#include</span> <span class='yellow'>&lt;string&gt;</span>\n\n<span class='pink'>using namespace</span> std;\n\n<i class='blue'>int</i> <span class='green'>main</span>(){\n\t<i class='blue'>string</i> msg <span class='pink'>=</span> <span class='yellow'>\"Hello World!\"</span>;\n\tcout <span class='pink'>&lt;&lt;</span> msg <span class='pink'>&lt;&lt;</span> endl;\n\n\t<span class='pink'>return</span> 0;\n}",
		color: "#f34b7d"
	},
	{
		name : "Java",
		extension: "java",
		code: "<span class='pink'>public</span> <i class='blue'>class</i> <span class='green'>HelloWorld</span>{\n\t<span class='pink'>public static</span> <i class='blue'>void</i> <span class='green'>main</span>(<i class='blue'>String</i><span class='pink'>[]</span> <span class='orange'>args</span>){\n\t\t<i class='blue'>System</i>.out.<span class='blue'>println</span>(<span class='yellow'>\"Hello World!\"</span>);\n\t}\n}",
		color: "#b07219"
	}
]

for(const language of languages) {

	const filename = document.createElement('h2')
	filename.className = 'filename'
	filename.innerHTML = `hello-world.${language.extension}`

	const code = document.createElement('pre')
	code.className = 'code'
	code.innerHTML = `<strong>${language.name}</strong>\n${language.code}`
	code.style.borderColor = language.color

	const file = document.createElement('div')
	file.className = 'file'
	file.appendChild(filename)
	file.appendChild(code)

	document.querySelector('main').appendChild(file)
}