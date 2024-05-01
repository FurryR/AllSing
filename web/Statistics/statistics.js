function File(line)
{
    var PhysicalPath;
    PhysicalPath=Server.MapPath("/Statistics/log.txt");
    //Response.Write( "PhysicalPath="+PhysicalPath+", ");
    var content;
    {
        var  MyFileObject=Server.CreateObject("Scripting.FileSystemObject");
        if(!MyFileObject.FileExists(PhysicalPath))
            content="";
        else
        {
            var size;
            size=MyFileObject.GetFile(PhysicalPath).size;
            var  MyTextFile=MyFileObject.OpenTextFile(PhysicalPath,1);//ForReading
            //Response.Write( "Size="+size+", ");
            content=MyTextFile.Read(size);
            MyTextFile.Close();
        }
        //Response.Write( "content="+content+", ");
    }
    if(!line)
        return content;
    content+=line;
    var max_length=1024*4;
    if(content.length>max_length)
        content=content.substring(content.length-max_length);
    var  MyTextFile=MyFileObject.CreateTextFile(PhysicalPath,true,false);//overwrite Unicode
    MyTextFile.Write(content);
    MyTextFile.Close();
    //Response.Write( "content="+content+", ");
}
