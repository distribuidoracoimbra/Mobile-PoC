using System;
using System.Threading.Tasks;
using PCLStorage;
using System.Collections.Generic;
using System.Text;

namespace MyApp.Models
{
    public static class Storage
    {
        public async static Task<bool> FileExistAsync(this string fileName, IFolder pastaRaiz = null)
        {
            IFolder folder = pastaRaiz ?? FileSystem.Current.LocalStorage;
            ExistenceCheckResult folderExist = await folder.CheckExistsAsync(fileName);
            if (folderExist == ExistenceCheckResult.FileExists)
            {
                return true;
            }
            return false;
        }

        public async static Task<IFile> CreateFile(this string folderName, IFolder rootFolder = null)
        {
            IFolder folder = rootFolder ?? FileSystem.Current.LocalStorage;
            IFile file = await folder.CreateFileAsync(folderName, CreationCollisionOption.ReplaceExisting);
            return file;
        }


        public async static Task<bool> WriteTextAllAsync(this string folderName, string content = "", IFolder rootFolder = null)
        {
            IFile file = await folderName.CreateFile(rootFolder);
            await file.WriteAllTextAsync(content);
            return true;
        }
        public async static Task<string> ReadAllTextAsync(this string folderName, IFolder rootFolder = null)
        {
            string content = "";
            IFolder folder = rootFolder ?? FileSystem.Current.LocalStorage;
            bool exist = await folderName.FileExistAsync(folder);
            if (exist == true)
            {
                try
                {
                    IFile arquivo = await folder.GetFileAsync(folderName);
                    content = await arquivo.ReadAllTextAsync();
                }
                catch
                {
                    throw new Exception("Erro ao ler arquivo.");
                }
            }
            return content;
        }
        public async static Task<bool> DeleteFile(this string folderName, IFolder rootFolder = null)
        {
            IFolder folder = rootFolder ?? FileSystem.Current.LocalStorage;
            bool exist = await folderName.FileExistAsync(folder);
            if (exist == true)
            {
                IFile file = await folder.GetFileAsync(folderName);
                await file.DeleteAsync();
                return true;
            }
            return false;
        }
    }
}
