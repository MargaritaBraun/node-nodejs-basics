import path from "path";
import fs from "fs";

const create = async () => {
  const pathToFilesDir = "files";
  const myfile = path.resolve("create.js");
  const fileFresh = path.resolve(pathToFilesDir, "fresh.txt");
  console.log(fileFresh);
  const myError = new Error("FS operation failed");

  fs.access(fileFresh, (err) => {
    if (err) {
      //throw myError;
      fs.writeFile(fileFresh, "I am fresh and young", "utf-8", (err) => {
        if (err) {
          //throw err;
          console.error("FS operation failed");
        } else {
          console.log("Created fresh.txt");
        }
      });
    } else {
      console.error("FS operation failed");
      //throw myError;
    }
  });
  // const statFresg = fs.stat(fileFresh)
  // console.log(statFresg)
  //   fs.stat(fileFresh, (err) => {
  //     // if (err) {
  //     // }
  //     //console.error(myError);
  //     //throw myError;
  //     try {
  //       console.log("FS operation failed");
  //     } catch (err) {
  //       fs.writeFile(fileFresh, "I am fresh and young", "utf-8");
  //       console.log("dsssdddd");
  //     }
  //   });

  // fs.access(fileFresh, (err, res) => {
  //     if (err) {
  //         console.error(myError);
  //     }
  //     console.log(res)
  // })
  // fs.access(fileFresh, (err) => {
  //     if (err) {
  //               console.error(myError);
  //               return;
  //             }
  //     fs.writeFile(fileFresh, "I am fresh and young", "utf-8");
  // });
  // fs.readFile('fileFresh', (err) => {
  //     if(err) throw myError;
  // })

  //   try {
  //     // Проверяем, существует ли файл
  //     await fs.access(fileFresh);
  //     // Если файл существует, выбрасываем ошибку
  //     throw new Error("FS operation failed: File already exists");
  //   } catch (err) {
  //     if (err.code === 'ENOENT') {
  //       // Если файл не существует, создаем его
  //       try {
  //         await fs.writeFile(fileFresh, "I am fresh and young", "utf-8");
  //         console.log("File is created");
  //       } catch (writeErr) {
  //         console.error("FS operation failed:", writeErr.message); // Логируем ошибку записи
  //       }
  //     } else {
  //       // Если ошибка не связана с отсутствием файла, выводим её
  //       console.error(err.message);
  //     }
  //   }
  //fs.writeFile(fileFresh, "I am fresh and young",
  //   fs.access(fileFresh, (err) => {
  //     if (err) {
  //       console.error("FS operation failed");
  //       return;
  //     }
  //       fs.writeFile(fileFresh, "I am fresh and young", (err) => {
  //           if (err) {
  //             console.error("FS operation failed");
  //             return;
  //         }
  //         console.log("File is created");
  //     });
  //   });

  //   fs.readdir("./files", (err, files) => {
  //     if (err) {
  //       console.error(myError);
  //       return;
  //     }
  //     files.forEach((nameFile) => {
  //       if (nameFile === "fresh.txt") {
  //         console.log("ERROR");
  //       } else {
  //         fs.writeFile(fileFresh, "I am fresh and young", (err, res) => {
  //           if (err) {
  //             console.log("ERROR");
  //           }
  //           console.log("File is created");
  //         });
  //       }
  //     });
  //     console.log("Directory read successfully! Here are the files:");
  //     console.log(files);
  //   });

  //fs.writeFile(fileFresh, "I am fresh and young", "utf-8");
};

await create();
