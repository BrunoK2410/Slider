function slide(t){let e=$("#bottomRow"),a=$("#bottomRow img"),d=$("#topRow"),s=$("#topRow img");"next"==t?(d.removeClass("flexStart"),e.removeClass("flexStart"),d.addClass("flexEnd"),e.addClass("flexEnd"),s.last().animate({width:"0"},250,()=>{d.prepend(s.last()),s.last().width("fit-content")}),a.last().animate({width:"0"},250,()=>{e.prepend(a.last()),a.last().width("fit-content")})):(d.removeClass("flexEnd"),e.removeClass("flexEnd"),d.addClass("flexStart"),e.addClass("flexStart"),s.first().animate({width:"0"},250,()=>{s.first().width("fit-content"),d.append(s.first().hide().fadeIn(1e3))}),a.first().animate({width:"0"},250,()=>{a.first().width("fit-content"),e.append(a.first().hide().fadeIn(1e3))}))}