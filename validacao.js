var listaCruzadinha = ["cpu", "ula", "registradores", "ram", "rom", "eprom", "flash", "memoriademassa", "dma", "cs", "addressbus", "databus", "i5", "i7", "dualcore", "quadcore", "threads", "cache"]
var cpuWord = ""
var ulaWord = ""
var registradoresWord = ""
var ramWord = ""
var romWord = ""
var epromWord = ""
var flashWord = ""
var memoriaDeMassaWord = ""
var dmaWord = ""
var csWord = ""
var addressBusWord = ""
var i5Word = ""
var i7Word = ""
var dualcoreWord = ""
var quadcoreWord = ""
var threadscoreWord = ""
var cacheWord = ""

var teste =

    setInterval(() => {
        cpuWord = inputCPULetra1.value + inputCPULetra2.value + inputCPULetra3.value;
        ulaWord = inputULALetra1.value + inputULALetra2.value + inputULALetra3.value;
        registradoresWord = inputREGISTRADORESLetra1.value + inputREGISTRADORESLetra2.value + inputREGISTRADORESLetra3.value + inputREGISTRADORESLetra4.value + inputREGISTRADORESLetra5.value + inputREGISTRADORESLetra6.value + inputREGISTRADORESLetra7.value + inputREGISTRADORESLetra8.value + inputREGISTRADORESLetra9.value + inputREGISTRADORESLetra10.value + inputREGISTRADORESLetra11.value + inputREGISTRADORESLetra12.value + inputREGISTRADORESLetra13.value;
        ramWord = inputRAMLetra1.value + inputRAMLetra2.value + inputRAMLetra3.value;
        romWord = inputROMLetra1.value + inputREGISTRADORESLetra10.value + inputROMLetra3.value;
        epromWord = inputREGISTRADORESLetra12.value + inputEPROMLetra2.value + inputEPROMLetra3.value + inputEPROMLetra4.value + inputRAMLetra3.value;
        flashWord = inputFLASHLetra1.value + inputULALetra2.value + inputFLASHLetra3.value + inputREGISTRADORESLetra5.value + inputFLASHLetra5.value;
        memoriaDeMassaWord = inputMEMORIADEMASSALetra1.value + inputREGISTRADORESLetra2.value + inputMEMORIADEMASSALetra3.value + inputMEMORIADEMASSALetra4.value + inputMEMORIADEMASSALetra5.value + inputMEMORIADEMASSALetra6.value + inputMEMORIADEMASSALetra7.value + inputMEMORIADEMASSALetra8.value + inputMEMORIADEMASSALetra9.value + inputMEMORIADEMASSALetra10.value + inputMEMORIADEMASSALetra11.value + inputMEMORIADEMASSALetra12.value + inputMEMORIADEMASSALetra13.value + inputMEMORIADEMASSALetra14.value
        dmaWord = inputDMALetra1.value + inputDMALetra2.value + inputDMALetra3.value;
        csWord = inputCSLetra1.value + inputCSLetra2.value;
        addressBusWord = inputREGISTRADORESLetra8.value + inputADDRESSBUSLetra2.value + inputADDRESSBUSLetra3.value + inputADDRESSBUSLetra4.value + inputADDRESSBUSLetra5.value + inputADDRESSBUSLetra6.value + inputADDRESSBUSLetra7.value + inputADDRESSBUSLetra8.value + inputCPULetra3.value + inputADDRESSBUSLetra10.value;
        dataBusWord = inputMEMORIADEMASSALetra8.value + inputDATABUSLetra2.value + inputDATABUSLetra3.value + inputDATABUSLetra4.value + inputDATABUSLetra5.value + inputDATABUSLetra6.value + inputADDRESSBUSLetra7.value;
        i5Word = inputREGISTRADORESLetra4.value + inputI5Letra2.value;
        i7Word = inputMEMORIADEMASSALetra6.value + inputI7Letra2.value;
        dualcoreWord = inputDUALCORELetra1.value + inputDUALCORELetra2.value + inputDUALCORELetra3.value + inputDUALCORELetra4.value + inputDUALCORELetra5.value + inputDUALCORELetra6.value + inputMEMORIADEMASSALetra5.value + inputDUALCORELetra8.value;
        quadcoreWord = inputQUADCORELetra1.value + inputQUADCORELetra2.value + inputDMALetra3.value + inputQUADCORELetra4.value + inputCSLetra1.value + inputQUADCORELetra6.value + inputQUADCORELetra7.value + inputQUADCORELetra8.value;
        threadsWord = inputDATABUSLetra3.value + inputTHREADSLetra2.value + inputTHREADSLetra3.value + inputTHREADSLetra4.value + inputTHREADSLetra5.value + inputTHREADSLetra6.value + inputTHREADSLetra7.value;
        cacheWord = inputCACHELetra1.value + inputDUALCORELetra3.value + inputCACHELetra3.value + inputCACHELetra4.value + inputQUADCORELetra8.value;


        if (listaCruzadinha.indexOf(cpuWord) > -1 && listaCruzadinha[0] == cpuWord) {
            teste = document.getElementsByClassName('cpu')
            for (var i = 0; i < teste.length; i++) {
                teste[i].classList.add('verde');
                teste[i].classList.remove("vermelho");
            }
        } else if (cpuWord.length == 3) {
            teste = document.getElementsByClassName('cpu')
            for (var i = 0; i < teste.length; i++) {
                teste[i].classList.add('verde');
                teste[i].classList.add('vermelho')
            }
        }

        if (listaCruzadinha.indexOf(ulaWord) > -1 && listaCruzadinha[1] == ulaWord) {
            teste = document.getElementsByClassName('ula')
            for (var i = 0; i < teste.length; i++) {
                teste[i].classList.add('verde');
                teste[i].classList.remove('vermelho');
            }
        } else if (ulaWord.length == 3) {
            teste = document.getElementsByClassName('ula')
            for (var i = 0; i < teste.length; i++) {
                teste[i].classList.add('vermelho')
            }
        }

        if (listaCruzadinha.indexOf(registradoresWord) > -1 && listaCruzadinha[2] == registradoresWord) {
            teste = document.getElementsByClassName('registradores')
            for (var i = 0; i < teste.length; i++) {
                teste[i].classList.add('verde');
                teste[i].classList.remove('vermelho');
            }
        } else if (registradoresWord.length == 13) {
            teste = document.getElementsByClassName('registradores')
            for (var i = 0; i < teste.length; i++) {
                teste[i].classList.add('vermelho');
            }
        }


        if (listaCruzadinha.indexOf(ramWord) > -1 && listaCruzadinha[3] == ramWord) {
            teste = document.getElementsByClassName('ram')
            for (var i = 0; i < teste.length; i++) {
                teste[i].classList.add('verde');
                teste[i].classList.remove('vermelho');
            }
        } else if (ramWord.length == 3) {
            teste = document.getElementsByClassName('ram')
            for (var i = 0; i < teste.length; i++) {
                teste[i].classList.add('vermelho')
            }
        }

        if (listaCruzadinha.indexOf(romWord) > -1 && listaCruzadinha[4] == romWord) {
            teste = document.getElementsByClassName('rom')
            for (var i = 0; i < teste.length; i++) {
                teste[i].classList.add('verde');
                teste[i].classList.remove('vermelho');
            }
        } else if (romWord.length == 3) {
            teste = document.getElementsByClassName('rom')
            for (var i = 0; i < teste.length; i++) {
                teste[i].classList.add('vermelho')
            }
        }

        if (listaCruzadinha.indexOf(epromWord) > -1 && listaCruzadinha[5] == epromWord) {
            teste = document.getElementsByClassName('eprom')
            for (var i = 0; i < teste.length; i++) {
                teste[i].classList.add('verde');
                teste[i].classList.remove('vermelho');
            }
        } else if (epromWord.length == 5) {
            teste = document.getElementsByClassName('eprom')
            for (var i = 0; i < teste.length; i++) {
                teste[i].classList.add('vermelho')
            }
        }

        if (listaCruzadinha.indexOf(flashWord) > -1 && listaCruzadinha[6] == flashWord) {
            teste = document.getElementsByClassName('flash')
            for (var i = 0; i < teste.length; i++) {
                teste[i].classList.add('verde');
                teste[i].classList.remove('vermelho');
            }
        } else if (flashWord.length == 5) {
            teste = document.getElementsByClassName('flash')
            for (var i = 0; i < teste.length; i++) {
                teste[i].classList.add('vermelho')
            }
        }

        if (listaCruzadinha.indexOf(memoriaDeMassaWord) > -1 && listaCruzadinha[7] == memoriaDeMassaWord) {
            teste = document.getElementsByClassName('memoriaDeMassa')
            for (var i = 0; i < teste.length; i++) {
                teste[i].classList.add('verde');
                teste[i].classList.remove('vermelho');
            }
        } else if (memoriaDeMassaWord.length == 14) {
            teste = document.getElementsByClassName('memoriaDeMassa')
            for (var i = 0; i < teste.length; i++) {
                teste[i].classList.add('vermelho')
            }
        }

        if (listaCruzadinha.indexOf(dmaWord) > -1 && listaCruzadinha[8] == dmaWord) {
            teste = document.getElementsByClassName('dma')
            for (var i = 0; i < teste.length; i++) {
                teste[i].classList.add('verde');
                teste[i].classList.remove('vermelho');
            }
        } else if (dmaWord.length == 3) {
            teste = document.getElementsByClassName('dma')
            for (var i = 0; i < teste.length; i++) {
                teste[i].classList.add('vermelho')
            }
        }

        if (listaCruzadinha.indexOf(csWord) > -1 && listaCruzadinha[9] == csWord) {
            teste = document.getElementsByClassName('cs')
            for (var i = 0; i < teste.length; i++) {
                teste[i].classList.add('verde');
                teste[i].classList.remove('vermelho');
            }
        } else if (csWord.length == 2) {
            teste = document.getElementsByClassName('cs')
            for (var i = 0; i < teste.length; i++) {
                teste[i].classList.add('vermelho')
            }
        }

        if (listaCruzadinha.indexOf(addressBusWord) > -1 && listaCruzadinha[10] == addressBusWord) {
            teste = document.getElementsByClassName('addressBus')
            for (var i = 0; i < teste.length; i++) {
                teste[i].classList.add('verde');
                teste[i].classList.remove('vermelho');
            }
        } else if (addressBusWord.length == 10) {
            teste = document.getElementsByClassName('addressBus')
            for (var i = 0; i < teste.length; i++) {
                teste[i].classList.add('vermelho')
            }
        }

        if (listaCruzadinha.indexOf(dataBusWord) > -1 && listaCruzadinha[11] == dataBusWord) {
            teste = document.getElementsByClassName('dataBus')
            for (var i = 0; i < teste.length; i++) {
                teste[i].classList.add('verde');
                teste[i].classList.remove('vermelho');
            }
        } else if (dataBusWord.length == 7) {
            teste = document.getElementsByClassName('dataBus')
            for (var i = 0; i < teste.length; i++) {
                teste[i].classList.add('vermelho')
            }
        }

        if (listaCruzadinha.indexOf(i5Word) > -1 && listaCruzadinha[12] == i5Word) {
            teste = document.getElementsByClassName('i5')
            for (var i = 0; i < teste.length; i++) {
                teste[i].classList.add('verde');
                teste[i].classList.remove('vermelho');
            }
        } else if (i5Word.length == 2) {
            teste = document.getElementsByClassName('i5')
            for (var i = 0; i < teste.length; i++) {
                teste[i].classList.add('vermelho')
            }
        }

        if (listaCruzadinha.indexOf(i7Word) > -1 && listaCruzadinha[13] == i7Word) {
            teste = document.getElementsByClassName('i7')
            for (var i = 0; i < teste.length; i++) {
                teste[i].classList.add('verde');
                teste[i].classList.remove('vermelho');
            }
        } else if (i7Word.length == 2) {
            teste = document.getElementsByClassName('i7')
            for (var i = 0; i < teste.length; i++) {
                teste[i].classList.add('vermelho')
            }
        }

        if (listaCruzadinha.indexOf(dualcoreWord) > -1 && listaCruzadinha[14] == dualcoreWord) {
            teste = document.getElementsByClassName('dualcore')
            for (var i = 0; i < teste.length; i++) {
                teste[i].classList.add('verde');
                teste[i].classList.remove('vermelho');
            }
        } else if (dualcoreWord.length == 8) {
            teste = document.getElementsByClassName('dualcore')
            for (var i = 0; i < teste.length; i++) {
                teste[i].classList.add('vermelho')
            }
        }

        if (listaCruzadinha.indexOf(quadcoreWord) > -1 && listaCruzadinha[15] == quadcoreWord) {
            teste = document.getElementsByClassName('quadcore')
            for (var i = 0; i < teste.length; i++) {
                teste[i].classList.add('verde');
                teste[i].classList.remove('vermelho');
            }
        } else if (quadcoreWord.length == 8) {
            teste = document.getElementsByClassName('quadcore')
            for (var i = 0; i < teste.length; i++) {
                teste[i].classList.add('vermelho')
            }
        }

        if (listaCruzadinha.indexOf(threadsWord) > -1 && listaCruzadinha[16] == threadsWord) {
            teste = document.getElementsByClassName('threads')
            for (var i = 0; i < teste.length; i++) {
                teste[i].classList.add('verde');
                teste[i].classList.remove('vermelho');
            }
        } else if (threadsWord.length == 7) {
            teste = document.getElementsByClassName('threads')
            for (var i = 0; i < teste.length; i++) {
                teste[i].classList.add('vermelho')
            }
        }

        if (listaCruzadinha.indexOf(cacheWord) > -1 && listaCruzadinha[17] == cacheWord) {
            teste = document.getElementsByClassName('cache')
            for (var i = 0; i < teste.length; i++) {
                teste[i].classList.add('verde');
                teste[i].classList.remove('vermelho');
            }
        } else if (cacheWord.length == 5) {
            teste = document.getElementsByClassName('cache')
            for (var i = 0; i < teste.length; i++) {
                teste[i].classList.add('vermelho')
            }
        }

        //     /* 
        //         listaDasPalavras = [cpu, rom, ula]

        //         var digitoUsuario = input.value      'c p u'

        //         var auxiliar = listaDasPalavras.filter(word => word == listaDasPalavras[i])
        //         auxiliar = cpu

        //         digitoUsuario == listaDasPalavras.filter(digitoUsuario)

        //         var cpuValidacao = listaDasPalavras.filter(word => word == "cpu");



        //         var juncao = c + p + u
        //         if (juncao = listaDasPalavras.indexOf(juncao) {
        //             for (var posicaoDasWords = 0; posicaoDasWords < listaDasPalavras.length; posicaoDasWords++) {
        //                 var existe = listaDasPalavras[posicaoDasWords].indexOf("");

        //             }

        //             listaDasPalavras[].indexOf()

        //         }

        //         if (c == 'c' && p == 'p' && u == 'u' || u == u && l == l && a == a) {
        //             for (var palavrinha = indexOf(""); palavrinha < listaDasPalavras.length; palavrinha++) {
        //                 var palavraAtual = listaDasPalavras[palavrinha];

        //                 for (var letrinha = 0; letrinha < palavraAtual.length; letrinha++) {
        //                     palavraAtual[letrinha].classList.add('verde');

        //                 }
        //                 palavrinha = 1
        //                     p o r c o
        //                 letrinha = 4
        //                 palavras = [palavra1, palavra2, palavra3]
        //             }

        //             for (var i = 0; i <= palavras.length; i++) {
        //                 for (var p1 = 0; p1 < palavras[i].length; p1++) {
        //                     palavras[i][p1].classList.add('verde');
        //                 }

        //                 palavrinha[i][0].classList.add('verde');
        //                 palavrinha[i][1].classList.add('verde');

        //             }
        //         }
        //     } */


    }, 1000);
