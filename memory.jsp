<%
	out.println("<h1>MAX = " + Runtime.getRuntime().maxMemory() + "[" + (Runtime.getRuntime().maxMemory() / (double)1024 / 1024)+ "]</h1>") ;
	out.println("<h1>TOTAL = " + Runtime.getRuntime().totalMemory() +"[" + (Runtime.getRuntime().totalMemory() / (double)1024 / 1024)+ "]</h1>") ;
	out.println("<h1>FREE = " + Runtime.getRuntime().freeMemory() +"[" + (Runtime.getRuntime().freeMemory() / (double)1024 / 1024)+ "]</h1>") ;
%>