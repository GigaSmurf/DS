(this.webpackJsonpdylansyahputra=this.webpackJsonpdylansyahputra||[]).push([[0],{18:function(A,e,c){},19:function(A,e,c){},20:function(A,e,c){},30:function(A,e,c){},31:function(A,e,c){"use strict";c.r(e);var t=c(1),s=c(4),l=c.n(s),i=(c(18),c(19),c(9),c(20),c(2)),n=c.n(i),a=c(0);var o=()=>Object(a.jsx)(n.a,{children:Object(a.jsx)("div",{id:"board",children:Object(a.jsx)("div",{class:"note draggable",id:"sticky",children:Object(a.jsx)("div",{class:"text",children:Object(a.jsx)("textarea",{class:"cnt",placeholder:"TODO list:\n\n\u2611code\n\n\u2610eat\n\n\u2610gym",rows:"14"})})})})}),d=c(8);class j extends t.Component{constructor(A){super(A);const e=new Date;let c=e.getHours();const t=e.getMinutes(),s=c>=12?"PM":"AM";c>12?c-=12:0===c&&(c=12);const l="".concat(c,":").concat(t<10?"0"+t:t," ").concat(s);this.state={date:l}}componentDidMount(){this.timerID=setInterval((()=>this.tick()),1e3)}componentWillUnmount(){clearInterval(this.timerID)}tick(){const A=new Date;let e=A.getHours();const c=A.getMinutes(),t=e>=12?"PM":"AM";e>12?e-=12:0===e&&(e=12);const s="".concat(e,":").concat(c<10?"0"+c:c," ").concat(t);this.setState({date:s})}clicker(){window.open("https://dylansyahputra.tech","_self")}render(){var{date:A}=this.state;return Object(a.jsxs)("div",{className:"taskbar",children:[Object(a.jsx)("div",{className:"start-button-wrapper",children:Object(a.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAOCAYAAAC7IpUCAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NUM1ODI5QzgzOTZGMTFFOEFFNkU4RDM2QzcxREQwM0MiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NUM1ODI5QzkzOTZGMTFFOEFFNkU4RDM2QzcxREQwM0MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1QzU4MjlDNjM5NkYxMUU4QUU2RThEMzZDNzFERDAzQyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1QzU4MjlDNzM5NkYxMUU4QUU2RThEMzZDNzFERDAzQyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PjeV5nEAAAEdSURBVHjazFZLDoIwEGWIJC4N8R66MN5A5UQewhNhvIILPYjoTiPRJ1AstFD6iQQnacIMtPPm9XUKeWYGySdvQCNLsN4/gPc7gPF4spnz4PY21RUFafQCWgYgJLusZyK11ADeVgTVdgEtBbkYn+tLW9xYkHKU7yoMvGw0QX1IyM+YlNkRE2WAw8OZu7vJ9RcwYCAnlcSQ67UIJisGPvfLQkyHjaZ18oBKpoI8wv2JagcOXBJ1i9Jq5mNpKgky7EAOhzZ6onOxKGWj9HFfIANumgiag9jlq5nmhDBgrIjvs31n7q3NiS0vDojnK1inJrA4qDCPjyaXDaT21/Ze9b12bSo/JofbcLBbcSSBJAVYciyo938POLCIIZj+CDAAkHCTiNbrGBwAAAAASUVORK5CYII=",alt:"Start",className:"start-button",onClick:this.clicker})}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{className:"container"}),Object(a.jsx)("div",{className:"time-wrapper",children:Object(a.jsx)("span",{className:"time",children:A})})]})}}var r=j,b="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAIVBMVEUAAACZmQAICAj4+Pj//5n/+/DMzGYAAAD/zJkzMwD///9AsZvJAAAAAXRSTlMAQObYZgAAAAFiS0dECmjQ9FYAAAAHdElNRQfiBAsSOiJastlrAAAAuElEQVQoz62QMQ7CQBADLyVlQKLmD/ABpC38AF5AgZSOR7i4kpbf4t3b4xLR4i6+sb1KKb+apf3qe7qY2fU0jIO5BjLdwhjI8dE0Nylx3uiZFS4YjfduAJADLCvCCNrKoAL2JajPyG0IZ9IQGzP1S2iSMdsMZgbshOIVsRsGs7WidzAm1IGaEfgNIugRxIJblXUQ/my1dXgaUaDLZDDm5HgiIvGqQyw7GJVOIO7oPzm1lN17o1f5gz69jIC7vf9PIQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wNC0xMVQxODo1ODozNC0wNDowMIXrp+gAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDQtMTFUMTg6NTg6MzQtMDQ6MDD0th9UAAAAAElFTkSuQmCC";class m extends t.Component{render(){var A;switch(this.props.icon){case"recycle":A=Object(a.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAElBMVEUAAACAgIAAAADAwMD///8AgABI7wriAAAAAXRSTlMAQObYZgAAAAFiS0dEBI9o2VEAAAAHdElNRQfiBhoAMQTmjJHZAAABTElEQVQ4y3XU4Y2DMAwF4PQmqEn432MDyzAAlyxQiey/yvkZQkNCUZGq98WxCVWds4uInuS660HTQCTPNqdhUpgTP7Xusnz6Jc0Tk96nPHQ5UdA8sd6RC4S/XwrrCvAJWsDPyc8nUIqljRdJUYI3WGOI/mijIFrEaD6viaMXpgIo0hKWoDshwHY7aJHMgCSEdR9AEe/z6ld6VYBOmE18IsBDPpeOp6B5C+hkeQcaW34C51zE8sHtMIss7zt4R5Hsl9jCkiNKDLi0wIPkHKBjC0vOm0Y5dxWMjCsYXIFx0wIDuoKt/QbNY2DeAr7AqwGO9VB4wgOW0ML4DXizfQoMrgBK8An1UPbWedMBMEMLEsZMOLEO9HDtSKre5QdkR8wXoH1WvMYr/OzSg5tMlh4OkWaoWjoo0sMhTYtTrPfU/j+o8F0O4dsccp+rVPk/RsOIrdrb4ToAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTgtMDYtMjZUMDA6NDk6MDQtMDQ6MDA484PuAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE4LTA2LTI2VDAwOjQ5OjA0LTA0OjAwSa47UgAAAABJRU5ErkJggg==",alt:"Recycle Bin",className:"style"});break;case"resume":A=Object(a.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfiBhoALTAhTzgxAAAAuUlEQVRYw+2Y0Q3DIAxEL1UGYzSPxmavH1WbgJBIaopA5X6MIuvss8GISH0REcJvD2zH0ggKMkk+axnvhx4iAqcVYCcVj27VN3fuvHNPFGQBvIiI2LdEK0AVe/5hKzhR9CHzRSXsNbISuOH7lQJXiTxktxW0CPZzBfOfgxEOmq8rq8lVXBoV19Bw2C0FS8FS8G8K5p+mI4zrwa/M+RXMv4tOMGLzR2zWUyO4Unz9sbCENd80LXqccD4B2OtkJeICGnMAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTgtMDYtMjZUMDA6NDU6NDgtMDQ6MDBhJQfuAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE4LTA2LTI2VDAwOjQ1OjQ4LTA0OjAwEHi/UgAAAABJRU5ErkJggg==",alt:"Text File",className:"style"});break;case"folder":A=Object(a.jsx)("img",{src:b,alt:"Folder",className:"style"});break;case"explorer":A=Object(a.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAn1BMVEUEBAQAZswzZv8Amf8zmcwzM8wzZmZmmZmgoKQAzP8AZpnAwMAAAJnA3MDn59aZzJlmZsxmzP/v1sb//8zMzJn//5mZmZkz//+WlpaZ//93d3f/zJnM//+GhoYzZsxmZmb/zGbMzGaZmWZCQkLMmZnMmWatqZCZzGZmZjOZmTMAZv9VVVUAM2ZNTU0pKSlfX18AADMWFhYzZpkzM2b///8ipRXAAAAAAXRSTlMAQObYZgAAAAFiS0dENKmx6f0AAAAHdElNRQfiBhoAKjEZCZ5gAAACdUlEQVRIx42Uf3/aIBCHAwRUxtrZxjmxrtXVNi7Rzfn+39vuOAiQmNaL//jJ8/A9wo+iuKEY1S2oozkHWghxk+Lw8Ed8amT4BwYLxXMe3ozQPFRZ5pMdRLAcF/ikk+0JjMmEL0tnYI1MW6rAT6bAcwE/IWYi+aKZILXnp18c73DgZ85hA8E4nvHJ17v7bzy0A/Q8MZLpAK+Rnz48duNHY+6NhDdSAT+pHhcT5DkX3PFz9/iM2BHw2NH3h8Wd53lImC/hQQforiOJvGbVYlH9IF5LKXHH4fjL1XLlMlgSAIZFnsbX7pVTXII3kgDk14u1H1+HF4Yxn/C0mol0BsbA+Ov1hv/kCR+Np9VynhjAP1cv62pDeyJdTcNCwhJ76jp63m6rasevCYKMNMGYX7vt60vg+wJ+KTRiAvB2v33bdEJWYS2SHWWsfXvfW96rktPept0R1g7L1gfreZbz4Tz09mx9qPc7S83wviGiEQRb1/Zgf1PzfMwQ8egBX/vxNeMfGyjYpg68JEGa8SKhscQrEj6535qmoQA4QfrK3dUv2zQ1cwdAuTM3EKTU3aS0FxDSLfCKDXpCnhakFAyFI3Wk8UwoPegJeBaWkJNwpADTGoWzpgivaDx0/vty4kFoXECLCdHQrrKbthMwQZ+MM5gKSLzwcx4EN/1TCwZerqq3P8aEIhr6uuH5TuiMfuc9vvhz9AsSDJp5z4F9033pTihOf9vW3ZlaaZUqgEc+ETAEUzTes0qHHJYOjz2pKBSn8zmk4Lq7pZAy44uiVVGAQgVLhhrs11b+SwxtLmeKMddgb7BgwB4cgXID8rFf3LE34E65QNeXW/D/BJAzhO2wdrcAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTgtMDYtMjZUMDA6NDI6NDktMDQ6MDAljhcjAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE4LTA2LTI2VDAwOjQyOjQ5LTA0OjAwVNOvnwAAAABJRU5ErkJggg==",alt:"Internet Explorer",className:"style"});break;case"linkedin":A=Object(a.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAJ1BMVEUAAAB/f3/AwMD///8AAAAAAIAAAP8A//8AgIAA/wAAgACAgAD//wA6t+/tAAAAAXRSTlMAQObYZgAAAAFiS0dEAxEMTPIAAAAHdElNRQfiBhoALCAl4xkUAAABHklEQVQ4y82TMW7DMAxFJSAHCB1vXSo3W5ZYHushTo0iQKcgyBVyhKBH6Nyta8deIUfwpUpFJikxDZAhQ/+oB5HU/5QxxlhgmUxFRapX6bnl8yfIwKwh1Rmwnm84BajzTIN+1E6D10PUJTjeDxz+AdjmuVi/H6VysZ5MV7mw7ToXTlznMhlN71QusiKcSwRcufabj6gRcGG/ef8DOCylwdcngjk21+Dnm0pd7XEbEEcVoIeH5hkIWz2P9l8FFztMgG3XQGwvYZoAmQ+6ohTA46HACUgvQAECJPFz6KWZwsPp1OGMVSKHYNk8t8NL00guWCmAx2rRDmtcHsoFtQ5g1b+1Q9gAyqVysdR5ztR+/eFzUMrSQ6bkO6QP73tjfgEEz7NK1Rcm+AAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wNi0yNlQwMDo0NDozMi0wNDowMCBSOocAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDYtMjZUMDA6NDQ6MzItMDQ6MDBRD4I7AAAAAElFTkSuQmCC",alt:"Neighborhood Network",className:"style"});break;case"email":A=Object(a.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAJ1BMVEUAAAAAAP8A//8AAIAAgICAgIAAAADAwMD//////wD/AACAAACAgACFiz2AAAAAAXRSTlMAQObYZgAAAAFiS0dECIbelXoAAAAHdElNRQfiBhoALTQmIvwoAAABdUlEQVQ4y6WUQW6DMBBFB3GBTPAFQjgAlKZKlk58gS5oVambbth3lXVUVYJldz4DOQKX64yNkjFG6qLfURTN543NyD8AfypBXC3W13m+WS3XyYkNV9/WEZIUXH80ODfUkVSh0sHT9DFFUWwBUMteSQnKEFACpKqURpYoY8yJf9d3o2meq0qTsWukXuD1/ImKlJ0DkdFdiNB63wVyRoaIWVi3E1GhBIbh6ok6CwA7DONkEBIQ17H3hkT6rh9GT3zVLIFcR0+ExyFknIhQvbNtbHDVdt1CK8vYfI+eHYcIwx/Oay/3+BZDf5u34sP6c/2v1dSHV/CCvlWFrEMXt3J39SBbWf91YUNuzju4t2bkMJ8VDeMStfLz69ezVtYv+5M7g4jmndZd6yMbO7qibaAPl4f8qW1vlzutbwFaPcgwpLrkABGxgTRIiaL8cU4MhUoaoDRSHowJYshCc+I4mDjRPFmlokADVC4nC/8aKV36rIQFpbUI7S+ZJ0EiokgB6QAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wNi0yNlQwMDo0NTo1Mi0wNDowMAn/WD4AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDYtMjZUMDA6NDU6NTItMDQ6MDB4ouCCAAAAAElFTkSuQmCC",alt:"Outlook Express",className:"style"});break;case"tictactoe":A=Object(a.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfiBhoAKix6D/K5AAABr0lEQVRYw9VWwZGDMAyUPBRGBbSTGmhHFdCZ7mEMtpGsBe4yc5tHEiztWlpbCVMMNZ8ykAmEKdFmLsygzPSEPGMjolkjieTTb0P6Q0THESnkeCnxWGArLgR4XUGECQnC9mrDPwNVZz9mwIqwjCr4UIQSsQ4O65978FWTu/O8XoLjpl1x9k63MHjGmJ4LQOKdUP1ViQiYP/eEroXtTvyCENsCjcwL7MzQqLhLWiO4B7cKMbthC2j98V23LAEtpD41LpsQCnUi4gbBs0jNb0gV8CnyqmBSGv0guBWA/6tCWAI8Jr8nPbjJCiVpeeIwTS7HwME7N+P//2R6Au+n6Q7bAxXybGi9LBYLLYoOO830RGJmaPM6Ic6A6jl28oIF6hWTHPE9Z3ekpUtdKLaDqd9UzVr9qxAzPZZgc1uFOZXGiktgu8fdew3JjhzrKruqV0OW0IZej3cmv3ZirvfuiSzuSFazRTknb5tF+wVLZDmHGkBfc1wumhzq7VOGL3ebnaKAu+izUxRQ19AabTdIsrmewGj319Fh29tKNAJxc9j57Eskb8FORHEyJW8Bo/Fw9uIHOR2I4H61TfIAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTgtMDYtMjZUMDA6NDI6NDQtMDQ6MDBEWXbjAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE4LTA2LTI2VDAwOjQyOjQ0LTA0OjAwNQTOXwAAAABJRU5ErkJggg==",alt:"Tic Tac Toe",className:"style"});break;case"minesweeper":A=Object(a.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfiBhgXExWY7op1AAABHElEQVRIx81VWw7DIAwz0+4FR0tvBifLPsIjIdBWqyYtVUHbsB0bxIB/LwafL3idw1lIvia4UeGk+VsrgwMFmQe+AAASxm87MgYzyyiVzZh5rBigt2+Iu2pGRAFwiP7SibMg8DjBgIzUjBjURNB6K85fBpAWBG4bC0o3kNVM69wMQdXPZtRzajQqxGAJxH0xjq02TbjWAYOb86OHxmCQIlBUfStfTZsBREQcSLVtqyov9W/IGJHDoY4MMTHqKA/V1zy9A5VEUbpk/M+fBWVCtDswB2jgLsRaWQHn9Gl7FkwWw7tOgZz3LQEUZEuBCwqsdZfw4Aiuy2BsiHwdE00i/kq7U9v7QN9460v15EbcREoXqT/+X7jRw68lntYHCbPf2nyUk7MAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTgtMDYtMjRUMjM6MTk6MjEtMDQ6MDCCvYp2AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE4LTA2LTI0VDIzOjE5OjIxLTA0OjAw8+AyygAAAABJRU5ErkJggg==",alt:"Minesweeper",className:"style"});break;case"music":A=Object(a.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAGFBMVEUAAAAAAACAgID//wDAwMAA//////8A/wBjuPy4AAAAAXRSTlMAQObYZgAAAAFiS0dEBmFmuH0AAAAHdElNRQfiBBMBIhiVaPrZAAABWUlEQVQ4y63US27DIBAGYMwJjGWp23pEmgN4kbURIevI5gCtuECkVL5+Z4ZgoLI3VVlYFp9+HgO2ENiaVuy3RrVHcCAI+0KwK01LsgviEMQhiL8AYNvZnoJxtBbeM/QMUs0E1mzSOAJ5Up4hSwMEZ5/ATmWh5JrBthnEGR8JXIpQ4DEhzBFCyPU8958bOLdFhNDdsEEIYUj90lLZI2DAmDSW9Nj/9s2AAa0TaHtX6rbOADFgpg2st/aGOwUO6CEDilEA6oMCKSF5+X7AmkNHgTRJBDtg9WRnuJVgOnofdFGu/wReiI6Tl0cieSEuLrc6Kw6EL9qgrk4XKOAcluS0VMCBECzA01cgOYAd4+W6FFPQsijA4EsQEAMIT7/kkXCSGCCgSAYZAwjrFSP5+mAkwrha73NgOxIEHKsIxNN9wb36qKR+wTpVAbzbPcPl8aufbj3B7g+i+j38ACyOgB2/RKMsAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE4LTA0LTE5VDAxOjM0OjI0LTA0OjAw0kH5agAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOC0wNC0xOVQwMTozNDoyNC0wNDowMKMcQdYAAAAASUVORK5CYII=",alt:"Music",className:"style"});break;default:A=Object(a.jsx)("img",{src:b,alt:"Icon img"})}return Object(a.jsx)(n.a,{children:Object(a.jsxs)("div",{className:"icon",id:this.props.id,style:{top:this.props.top,left:this.props.left},children:[A,this.props.text]})})}}var h=c(3),O=c.p+"static/media/rs.d1bbb103.pdf";c(30);function g(A){let{value:e,onSquareClick:c}=A;const t="square ".concat("X"===e?"x":"O"===e?"o":"");return Object(a.jsx)("button",{className:t,onClick:c,children:e})}function x(A){let{xIsNext:e,squares:c,onPlay:t}=A;function s(A){if(C(c)||c[A])return;const s=c.slice();s[A]=e?"X":"O",t(s)}const l=C(c);let i;return i=l?"Winner: "+l:"Next player: "+(e?"X":"O"),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:"status",children:i}),Object(a.jsxs)("div",{className:"board-row",children:[Object(a.jsx)(g,{value:c[0],onSquareClick:()=>s(0)}),Object(a.jsx)(g,{value:c[1],onSquareClick:()=>s(1)}),Object(a.jsx)(g,{value:c[2],onSquareClick:()=>s(2)})]}),Object(a.jsxs)("div",{className:"board-row",children:[Object(a.jsx)(g,{value:c[3],onSquareClick:()=>s(3)}),Object(a.jsx)(g,{value:c[4],onSquareClick:()=>s(4)}),Object(a.jsx)(g,{value:c[5],onSquareClick:()=>s(5)})]}),Object(a.jsxs)("div",{className:"board-row",children:[Object(a.jsx)(g,{value:c[6],onSquareClick:()=>s(6)}),Object(a.jsx)(g,{value:c[7],onSquareClick:()=>s(7)}),Object(a.jsx)(g,{value:c[8],onSquareClick:()=>s(8)})]})]})}function M(){const[A,e]=Object(t.useState)([Array(9).fill(null)]),[c,s]=Object(t.useState)(0),l=c%2===0,i=A[c];const n=A.map(((A,e)=>{let c;return c=e>0?"Go to move #"+e:"Go to game start",Object(a.jsx)("li",{children:Object(a.jsx)("button",{onClick:()=>{s(e)},children:c})},e)}));return Object(a.jsxs)("div",{className:"game",children:[Object(a.jsx)("div",{className:"game-board",children:Object(a.jsx)(x,{xIsNext:l,squares:i,onPlay:function(t){const l=[...A.slice(0,c+1),t];e(l),s(l.length-1)}})}),Object(a.jsx)("div",{className:"game-info",children:Object(a.jsx)("ol",{children:n})})]})}function C(A){const e=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];for(let c=0;c<e.length;c++){const[t,s,l]=e[c];if(A[t]&&A[t]===A[s]&&A[t]===A[l])return A[t]}return null}var u=c.p+"static/media/League_of_Legends.d1ec3810.png";var N=()=>{const[A,e]=Object(t.useState)(!0),[c,s]=Object(t.useState)(!1);Object(t.useEffect)((()=>{setTimeout((()=>{e(!1),s(!0)}),5e3);const A=document.createElement("script");A.src="https://platform.linkedin.com/badges/js/profile.js",A.async=!0,A.defer=!0,A.onload=()=>{console.log("LinkedIn script loaded")},A.onerror=()=>{console.error("Error loading LinkedIn script")},document.body.appendChild(A)}),[]);const[l,i]=Object(t.useState)({recycleBin:!1,resume:!1,folder:!1,explorer:!1,tictactoe:!1,minesweeper:!1,music:!1,linkedin:!1,email:!1}),j=A=>{i({...l,[A]:!0})},b=A=>{i({...l,[A]:!1})};Object(t.useRef)(null);return Object(a.jsxs)("div",{className:"home",children:[A&&Object(a.jsx)("div",{class:"wrapper",children:Object(a.jsx)("div",{class:"typing",children:"Welcome Guest..."})}),c&&Object(a.jsx)("div",{children:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(d.BrowserView,{children:[Object(a.jsx)("div",{onDoubleClick:()=>j("recycleBin"),id:"button",children:Object(a.jsx)(m,{id:0,icon:"recycle",text:"Recycle Bin",left:-10,top:10},0)}),Object(a.jsx)(h.a,{open:l.recycleBin,onClose:()=>b("recycleBin"),modal:!0,children:A=>Object(a.jsx)(n.a,{children:Object(a.jsxs)("div",{className:"modal",children:[Object(a.jsx)("div",{className:"header",children:Object(a.jsx)("button",{className:"close",onClick:A,children:"\xd7"})}),Object(a.jsx)("div",{className:"content",children:Object(a.jsxs)("div",{className:"file-explorer",children:[Object(a.jsxs)("div",{className:"side-panel",children:[Object(a.jsx)("div",{className:"folder",children:"Recycle Bin"}),Object(a.jsx)("div",{className:"folder",children:"My Computer"})]}),Object(a.jsx)("div",{className:"main-panel",children:Object(a.jsxs)("div",{className:"filer",onClick:()=>window.open("https://www.op.gg/summoners/na/Gosu%20Uzi%20GALA","_blank"),children:[Object(a.jsx)("img",{src:u,alt:"LoL Logo",width:"20px",style:{marginRight:"5px",verticalAlign:"middle"}}),"League of Legends.exe"]})})]})})]})})}),Object(a.jsx)("div",{onDoubleClick:()=>j("resume"),id:"button",children:Object(a.jsx)(m,{id:1,icon:"resume",text:"Resume",left:90,top:10},1)}),Object(a.jsx)(h.a,{open:l.resume,onClose:()=>b("resume"),modal:!0,children:A=>Object(a.jsx)(n.a,{children:Object(a.jsxs)("div",{className:"modal",children:[Object(a.jsx)("div",{className:"header",children:Object(a.jsx)("button",{className:"close",onClick:A,children:"\xd7"})}),Object(a.jsx)("div",{className:"content",children:Object(a.jsx)("object",{title:"myframe",type:"application/pdf",data:O,width:"100%",height:"550px"})})]})})}),Object(a.jsx)("div",{onDoubleClick:()=>j("folder"),id:"button",children:Object(a.jsx)(m,{id:2,icon:"folder",text:"My Documents",left:-10,top:110},2)}),Object(a.jsx)(h.a,{open:l.folder,onClose:()=>b("folder"),modal:!0,children:A=>Object(a.jsx)(n.a,{children:Object(a.jsxs)("div",{className:"modal",children:[Object(a.jsx)("div",{className:"header",children:Object(a.jsx)("button",{className:"close",onClick:A,children:"\xd7"})}),Object(a.jsx)("div",{className:"content",children:Object(a.jsxs)("div",{className:"file-explorer",children:[Object(a.jsxs)("div",{className:"side-panel",children:[Object(a.jsx)("div",{className:"folder",children:"My Computer"}),Object(a.jsx)("div",{className:"folder",children:"C:"}),Object(a.jsx)("div",{className:"folder",children:"D:"}),Object(a.jsx)("div",{className:"folder",children:"Control Panel"}),Object(a.jsx)("div",{className:"folder",children:"Network Neighborhood"})]}),Object(a.jsxs)("div",{className:"main-panel",children:[Object(a.jsx)("button",{className:"file",onClick:()=>window.open("https://chess-ai-68a9ea2be35e.herokuapp.com/","_blank"),children:"chess.exe"}),Object(a.jsx)("button",{className:"file",onClick:()=>window.open("https://gigasmurf.github.io/GigaSmurf-Web/","_blank"),children:"gigasmurf.exe"}),Object(a.jsx)("button",{className:"file",onClick:()=>window.open("https://devpost.com/nalydputra","_blank"),children:"devpost.html"}),Object(a.jsx)("button",{className:"file",onClick:()=>window.open("https://github.com/GigaSmurf","_blank"),children:"github.html"}),Object(a.jsx)("button",{className:"file",children:"comingsoon.txt"})]})]})})]})})}),Object(a.jsx)("div",{onDoubleClick:()=>j("explorer"),id:"button",children:Object(a.jsx)(m,{id:2,icon:"explorer",text:"Internet Explorer",left:-10,top:210},2)}),Object(a.jsx)(h.a,{open:l.explorer,onClose:()=>b("explorer"),modal:!0,children:A=>Object(a.jsx)(n.a,{children:Object(a.jsxs)("div",{className:"modal",children:[Object(a.jsx)("div",{className:"header",children:Object(a.jsx)("button",{className:"close",onClick:A,children:"\xd7"})}),Object(a.jsx)("div",{className:"content",children:Object(a.jsx)("iframe",{src:"https://web.archive.org/web/1998/https://www.google.com/",width:"100%",height:"550px"})})]})})}),Object(a.jsx)("div",{onDoubleClick:()=>j("tictactoe"),id:"button",children:Object(a.jsx)(m,{id:3,icon:"tictactoe",text:"Tic Tac Toe",left:90,top:210},3)}),Object(a.jsx)(h.a,{open:l.tictactoe,onClose:()=>b("tictactoe"),modal:!0,children:A=>Object(a.jsx)(n.a,{children:Object(a.jsxs)("div",{className:"modal",children:[Object(a.jsx)("div",{className:"header",children:Object(a.jsx)("button",{className:"close",onClick:A,children:"\xd7"})}),Object(a.jsx)("div",{className:"content",children:Object(a.jsx)(M,{})})]})})}),Object(a.jsx)("div",{onDoubleClick:()=>j("minesweeper"),id:"button",children:Object(a.jsx)(m,{id:4,icon:"minesweeper",text:"Minesweeper",left:90,top:310},4)}),Object(a.jsx)(h.a,{open:l.minesweeper,onClose:()=>b("minesweeper"),modal:!0,children:A=>Object(a.jsx)(n.a,{children:Object(a.jsxs)("div",{className:"modal",children:[Object(a.jsx)("div",{className:"header",children:Object(a.jsx)("button",{className:"close",onClick:A,children:"\xd7"})}),Object(a.jsx)("div",{className:"content",children:"Coming soon!"})]})})}),Object(a.jsx)("div",{onDoubleClick:()=>j("music"),id:"button",children:Object(a.jsx)(m,{id:5,icon:"music",text:"Music",left:-10,top:410},5)}),Object(a.jsx)(h.a,{open:l.music,onClose:()=>b("music"),modal:!0,children:A=>Object(a.jsx)(n.a,{children:Object(a.jsxs)("div",{className:"modal",children:[Object(a.jsx)("div",{className:"header",children:Object(a.jsx)("button",{className:"close",onClick:A,children:"\xd7"})}),Object(a.jsx)("div",{className:"content",children:"Coming soon!"})]})})}),Object(a.jsx)("div",{onDoubleClick:()=>j("linkedin"),id:"button",children:Object(a.jsx)(m,{id:7,icon:"linkedin",text:"Network Neighborhood",left:90,top:110},7)}),Object(a.jsx)(h.a,{open:l.linkedin,onClose:()=>b("linkedin"),modal:!0,children:A=>Object(a.jsx)(n.a,{children:Object(a.jsxs)("div",{className:"modal",children:[Object(a.jsx)("div",{className:"header",children:Object(a.jsx)("button",{className:"close",onClick:A,children:"\xd7"})}),Object(a.jsx)("div",{className:"content",children:Object(a.jsx)("button",{class:"win98-button",onClick:()=>window.open("https://www.linkedin.com/in/dylansyahputra","_blank"),children:"Connect"})})]})})}),Object(a.jsx)("div",{onDoubleClick:()=>j("email"),id:"button",children:Object(a.jsx)(m,{id:8,icon:"email",text:"Outlook Express",left:-10,top:310},8)}),Object(a.jsx)(h.a,{open:l.email,onClose:()=>b("email"),modal:!0,children:A=>Object(a.jsx)(n.a,{children:Object(a.jsxs)("div",{className:"modal",children:[Object(a.jsx)("div",{className:"header",children:Object(a.jsx)("button",{className:"close",onClick:A,children:"\xd7"})}),Object(a.jsxs)("div",{className:"content",children:[Object(a.jsx)("h2",{children:"Contact Me"}),Object(a.jsx)("p",{children:"Thank you for reaching out! If you decide to send me an email, please know that I value your message and will make it a priority to get back to you as soon as possible. I appreciate your patience and look forward to connecting with you."})]})]})})}),Object(a.jsx)(o,{}),Object(a.jsx)(r,{})]},1),Object(a.jsx)(d.MobileView,{children:Object(a.jsx)("div",{className:"mainContent",id:"mainContainer",children:Object(a.jsx)("h1",{children:"computer required :("})})},2)]})})]})};var w=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)("div",{className:"content",children:Object(a.jsx)(N,{})})})};var p=A=>{A&&A instanceof Function&&c.e(3).then(c.bind(null,32)).then((e=>{let{getCLS:c,getFID:t,getFCP:s,getLCP:l,getTTFB:i}=e;c(A),t(A),s(A),l(A),i(A)}))},D=c(13);l.a.render(Object(a.jsx)(D.a,{children:Object(a.jsx)(w,{})}),document.getElementById("root")),p()},9:function(A,e,c){}},[[31,1,2]]]);
//# sourceMappingURL=main.f2a7550a.chunk.js.map