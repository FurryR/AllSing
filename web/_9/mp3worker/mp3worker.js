
/*
 * mp3worker
 * https://github.com/musictheory/mp3worker/
 *
 * Based on minimp3
 * https://github.com/lieff/minimp3
 *
 * Dedicated to the public domain
 * https://creativecommons.org/publicdomain/zero/1.0/
 */

var WebAssembly = {
    Instance: function(module, info) {
        this.exports = (
            // EMSCRIPTEN_START_ASM
            function instantiate(T) {
                function c(d) {
                    d.set = function(a, b) {
                        this[a] = b
                    };
                    d.get = function(a) {
                        return this[a]
                    };
                    return d
                }
                var e;
                var f = new Uint8Array(123);
                for (var a = 25; a >= 0; --a) {
                    f[48 + a] = 52 + a;
                    f[65 + a] = a;
                    f[97 + a] = 26 + a
                }
                f[43] = 62;
                f[47] = 63;

                function l(m, n, o) {
                    var g, h, a = 0,
                        i = n,
                        j = o.length,
                        k = n + (j * 3 >> 2) - (o[j - 2] == "=") - (o[j - 1] == "=");
                    for (; a < j; a += 4) {
                        g = f[o.charCodeAt(a + 1)];
                        h = f[o.charCodeAt(a + 2)];
                        m[i++] = f[o.charCodeAt(a)] << 2 | g >> 4;
                        if (i < k) m[i++] = g << 4 | h >> 2;
                        if (i < k) m[i++] = h << 6 | f[o.charCodeAt(a + 3)]
                    }
                }

                function p(q) {
                    l(e, 1024, "RKwAAIC7AAAAfQAAAAAAAAAECAwQFBgcICgwOEBIUAAECAwQFBgcICgwOEBIUAAQGBwgKDA4QEhQWGBwgAAQFBgcICgwOEBQYHCAoAAQGBwgKDA4QFBgcICgwAAQIDBAUGBwgJCgsMDQ4AAAAAAAAAYGBgYGBggKDA4QFBgcICYuNDxEOjYADAwMDAwMEBQYHCAoMDhATFoCAgICAgAGBgYGBgYICgwOEBQYHCAmLjQ8RDo2AAYGBgYGBggKDA4QEhYaICYuNj5GTCQABgYGBgYGCAoMDhAUGBwgJi40PEQ6NgAEBAQEBAQGBggICgwQFBgcIioyNkyeAAQEBAQEBAYGBggKDBASFhwiKC42NsAABAQEBAQEBgYICgwQFBgeJi44RFRmGg==");
                    l(e, 1328, "BAQEBAQEBAQEBgYGCAgICgoKDAwMDg4OEhISGBgYHh4eKCgoEhISAAgICAgICAgICAwMDBAQEBQUFBgYGBwcHCQkJAICAgICAgICAhoaGgAEBAQEBAQEBAQGBgYGBgYICAgKCgoODg4SEhIaGhogICAqKioSEhIABAQEBAQEBAQEBgYGCAgICgoKDAwMDg4OEhISGBgYICAgLCwsDAwMAAQEBAQEBAQEBAYGBggICAoKCgwMDA4ODhISEhgYGB4eHigoKBISEgAEBAQEBAQEBAQEBAQGBgYICAgKCgoMDAwODg4SEhIWFhYeHh44ODgABAQEBAQEBAQEBAQEBgYGBgYGCgoKDAwMDg4OEBAQFBQUGhoaQkJCAAQEBAQEBAQEBAQEBAYGBggICAwMDBAQEBQUFBoaGiIiIioqKgwMDAAGBgYGBgYGBgYICAgKCgoMDAwODg4SEhIYGBgeHh4oKCgSEhIAAAAADAwMBAQECAgIDAwMEBAQFBQUGBgYHBwcJCQkAgICAgICAgICGhoaAAYGBgYGBgYGBgYGBggICAoKCg4ODhISEhoaGiAgICoqKhISEgAAAAAGBgYGBgYGBgYICAgKCgoMDAwODg4SEhIYGBggICAsLCwMDAwAAAAABgYGBgYGBgYGCAgICgoKDAwMDg4OEhISGBgYHh4eKCgoEhISAAAAAAQEBAQEBAYGBAQEBgYGCAgICgoKDAwMDg4OEhISFhYWHh4eODg4AAAEBAQEBAQGBgQEBAYGBgYGBgoKCgwMDA4ODhAQEBQUFBoaGkJCQgAABAQEBAQEBgYEBAQGBgYICAgMDAwQEBAUFBQaGhoiIiIqKioMDAwAAAYFBQUGBQUFBgUHAwsKAAAHBwcABgYGAwgIBQAICQYMBgkJCQYJDAYPEgAABg8MAAYMCQYGEgkACQkGDAkJCQkJCQwGEhIAAAwMDAAMCQkGDwwJ");
                    l(e, 2065, "AQIDDAUGBwkKCw0ODxITBQUEBAUFBAEEAwEBBQYGAQQEBAEEAwEBAQEBAQICAwMDAg==");
                    l(e, 2130, "gDD9RFcw8wQ1MPA3GDA=");
                    l(e, 2208, "EQMRAxEDEQMQAxADEAMQAwECAQIBAgECAQIBAgECAQIAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQH/IQUSBQIFEQMRAxEDEQMQAxADEAMQAwEDAQMBAwEDAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEiASABAf8hBRIFAgUBAwEDAQMBAxECEQIRAhECEQIRAhECEQIQAhACEAIQAhACEAIQAhACAAIAAgACAAIAAgACAAIAAiIBIAED/8L+of6R/hEDEQMRAxEDEAMQAxADEAMBAwEDAQMBAwABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABMwMyAyMCIwITARMBEwETATECMAIDAiICIQESASABAgEC/+H+MQUTBSIFIAUhBCEEEgQSBAIEAgQQAxADEAMQAxECEQIRAhECEQIRAhECEQIBAwEDAQMBAwADAAMAAwADMwIwAjIBMgEjAQMBBP9j/iP+4v0SBcH9EQQRBBADEAMQAxADAQMBAwEDAQMAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAYH+cf5TBEQEUgQlBFEDUQMVAxUDUARDBAUDBQM0BDMEVQFUAUUBNQFCAyQDQQJBAhQCFAIEAgQCQAMyAyMDMAMxAjECEwITAgMCIgIhASEBIAECAQT/U/4T/tH9IQQhBBIEEgQRAhECEQIRAhECEQIRAhECEAMQAxADEAMBAwEDAQMBAwACAAIAAgACAAIAAgACAAKC/jUEYf5SBCUEUARRA1EDFQMVA0MENAQFBDMEQgNCA1UCRQJUAVQBUwFEASQDQQMUAhQCQAMEAzIDIwMxAxMDMAMDAyIBIgEiASIBIAECAQP/o/5i/kH+Mf4xBRMFIf4iBSAFIQQhBBIEEgQCBAIEEQMRAxEDEQMQAxADEAMQAwEDAQMBAwEDAAMAAwADAAPB/lMDNQOx/kQDUgMlA1EDVQFUAUUBUAEVAhUCQwJDAjQCNAIFA0ADQgIkAjMCBAJBARQBMgEjATABAwEF/8T9I/3C/KH8kfwRBBEEEAMQAxADEAMBAwEDAQMBAwABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAf7x/eH9dAVHBWUFVgVzBTcFZAXR/TYFcgRyBCcEJwRGBXAFBwQHBCYEJgRUBVMFYARgBDUFRAVxA3EDcQNxA3cBdgFnAXUBVwFmAVUBRQEXAxcDYwRiBEH9UQQVBDH9YQNhAxYDFgMGAwYDUAQFBFIBJQFDATQB4fzR/EEDFAMEAzIDIwMwA0IBJAEzAUABMQITAgMCIgIhARIBIAECAQX/8/2j/VP9A/3B/LL8EgUhBCEEIAUCBREDEQMRAxEDEAMQAxADEAMBAwEDAQMBAwACAAIAAgACAAIAAgACAAJ3BXYFZwVXBWYFdAVHBQH+ZQVWBXMEcwQ3BDcEZARkBFQFRQVTBTUFcgNyA3IDcgMnAycDJwMnA0YERgRwBHAEdQFVARcCFwJxAwcDYwM2AwYDsf1EAVIBYf1RAyYCJgJiA2ADYQJhAiUBUAEWAhYCFQNDAwUDEf1CAyQDNAEzAUEDFANAAwQDMgIyAiMCIwIxARMBMAIDAiIBIgEE/3P+I/7T/ZL9c/0x/SH9Ev0xBRMFIgUhBCEEEgQSBCAFAgUABAAEEQMRAxEDEQMQAxADEAMQAwEDAQMBAwEDgf5nBHUEVwRmBHQERwRWBGUDZQNzA3MDNwRVBHIDcgN3AXYBJwNkA0YDcQMXAzH+YwM2A3ABBwFUA0UDRAPh/WICYgImAiYCYAFQARYCFgJhAwYDUwM1A1IDJQNRAhUCQwI0AgUDQANCAkICJAIkAkECQQIzARQBMgEjAQQCMAIDAQMBBv/F9zX2NPWj9GL0QfQx9BEEEQQQBBAEAQMBAwEDAQMAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQH95PtD+wP7svqD+kP6Afry+dL5svmR+YL5YvlC+SH5Evnx+OL4wvii+B0Ggfhx+GH4UfjDBsIGLAa1BkH4wQYcBjH4DAYh+BH4swY7BgH4sgbx90oG4fdJBtH3KwUrBbEFsQUbBRsFsAYLBmkGpAajBjoGlQZZBqIFogUqBSoF9Pwz/HL8/wT+BP0E7gT8BO0E+wS/BOwEzQRB/M4DzgPdA90DUfzfAt4B3gHvAc8B+gGeAfH76wO+A/kDnwOuA9sDvQOvAdwB+ASPBMwEYfvoBFH7fwN/A60DrQPaBMsEvARvBPYD9gPqAekB9wHnAY4D9QPZA50DXwN+A8oDuwP0A08Dwfo/A/MC8wLYA40DrAFuAfICLwKR+vAC5gHJAZwD5QO6AroC1wN9A+QC5AKMA20D4wLjApsCmwK5A6oD8QEfAQ8BDwGrAl4CTgLIAtYCPgIuAS4B4gLgAuEBHgEOAtUCXQLHAnwC1AK4AosCTQKpApoCxgJsAdMBPQK3AtIB0gEtAdEBewF7AcUCXAKZAqcCPAE8AXoCeQK0AbQB0AENAagBigHEAUwBtgFrAVsBmAGJAcABSwGmAWoBlwGIAaUBWgGWAYcBeAF3AWcBoQUaBcH2CgWx9jkFofaR9pIFKQWB9oMFOAVx9mH2UfaRBJEEGQQZBJAFCQWEBUgFJwVB9oIEggQoBCgEgQSBBKABhgFoAZQBkwGFAVgBdgF1AVcBZgF0AUcBZQFWATcBZAFGAXMFcgVxBHEEFwQXBFUFcAUHBWMFNgVUBUUFYgUmBVMFGAMYAxgDGAOABIAECAQIBGEEYQQWBBYEYARgBAYEBgSx9FIEJQRQBFEDUQMVAxUDQwQ0BAUEQgQkBDMEQQNBAzUBRAEUAhQCQAMEAzIDIwMxAjECEwIwAgMCIgIhARIBIAECAQb/ZfvV+dT4NPi09zP34/aT9lP2Evby9dH1wvWh9SIFIQUSBSAFAgURAxEDEQMRAxAEEAQBBAEEAAMAAwADAAMC/eL8wvyi/IH8cfxh/FH8Qfwx/CH8EfwB/PH74fvS+7wGbwax+6H7XwbnBn4GygasBrsGkfv0Bk8G8wY/Bo0GbgbyBi8GgfvxBh8GyQacBuUGugarBl4G1wZ9BuQGTgbIBowG4wbWBm0GPga5BpsG4gaqBi4G4QYeBnH71QZdBv8C/gLvAv0C7gHuAd8C/ALPAu0C3gL7Ar8BvwHsAs4C3QH6Aa8B6wG+AdwBzQH5AZ8BrgHbAb0B+AGPAcwB6QGeAfcBfwHaAa0BywH2AfYB6gLwAugBjgH1AdkBnQHYAeYBDwHgAQ4BYfpR+k0FQfox+iH6PQUtBRH60QW3BXsFHQUB+lwFqAWKBcQFTAW2BWsF8fnDBTwFpwV6BWoF4fksBCwEwgW1BccBfAHUAbgBiwGpAZoBxgFsAdMB0gHQAcUBDQGZAcABDAGwAVsFwQWYBYkFHAW0BUsFpgWzBZcFOwQ7BHkFiAWyBaUFKwQrBFoFsQUbBBsECwWWBWkFpAVKBYcFeAWjBToEOgSVBFkEogQqBKEEGgRR+IYEaASUBEkEkwQ5BEH4hQRYBKABCgF3AZABkgR2BGcEKQQZAxkDkQQJBIQESAR1BFcEgwQ4BGYEdASCA4IDKAMoA4EDgQMYAxgDRwSABAgEZQRWBHMENwRkBHIDJwNGA3EDVQMXA/H2YwNwAQcBNgNUA0UDYgMmA2EDofZTA2ABBgEWAhYCNQNEA1ICUgIlAiUCUQJRAhUCFQJQAwUDQwJDAjQCQgIkAjMCFAEUAUECQAIyASMBBAIwAjEBMQETAQMBBf+E/Pb3xPX09HP0MfQh9BEEEQQQBBAEAQMBAwEDAQMAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQH+8f3h/dH9+gXB/bH9+AX3BX8F9gVvBf8D/wP/A/8D9QVfBfQE9ARPBE8EPwQ/BA8EDwTzBaT9LwMvAy8DLwP+Ae8B/QHfAfwBzwH7Ab8BrwH5AZ8BjwEi/fL87gTR/OsE3ATB/OoEzASx/KH8rASR/OUE2wPbA+wCAf3tAe0BzgHdAZ4BngGuAp0C3gG+Ac0BvQHaAa0B5wHKAZwB1wHyBPAE8QPxAx8DHwMF/AT7VPrT+XP5I/nj+KL4c/gz+OkE6QTLBbwF6AWOBdkFfgW7BdgFjQXmBW4EbgTJBMkEugWrBV4FfQXkBOQETgXIBYwEjATjBOME1gTWBG0FuQWB+h4ETQRx+rcEYfo+Az4D4AQOBNUEXQTHBHwE1AS4BJsBqgGLAZoBewENAakExgRsBNMExQRcBNAD0AOoBIoEmQTEBGsEpwTDA8MDkfnBAwwDgfkuAi4C4gPhA7UBmAGJAZcBPQPSAy0DHQOzAzH50QLRAnkBiAFMA7YDPAN6A8ICwgIsA1sDHAPAA7QDSwOmA2oDOwI7AoH4sgIrArECpQFaARsCGwKwAwsDlgNpA6QDSgOHA3gDOgI6AqMDlQOiAqIC8fUaBuH1SQbR9XYGKgUqBaEFoQWgBgoGkwY5BoUGWAaSBZIFKQUpBWcGkAaRBZEFGQUZBQkGhAZIBlcGgwY4BmYGggYoBSgFdAZHBoEFgQUYBRgFCAUIBYAGZQZzBXMFNwU3BVYGZAZyBXIFJwUnBUYGVQZwBXAFcQRxBHEEcQRZAYYBaAF3AZQBdQEXBEH1MfUh9SYEYQQWBBH1NQQB9VIEJQQVAxUDUQRQBAcBYwE2AVQBRQFiAWABBgFTAUQBQwQ0BAUEQgQkBDMEQQNBAxQDFANABAQEMgMyAyMDIwMxAjECEwITAjADAwMiAiICIQESASABAgED/8P+g/5C/iL+A/7/BP8E1fxl+1X6JPmU+BT4c/cz9+P2kvZz9jH2IvYhBRIFAfYRBBEEEAQQBAEEAQQABAAE/gPvA/0D3wP8A88D+wO/A68CrwL6A/kDnwKfAo8CjwL4A/cDfwJ/AvYC9gJvAm8C9QJfAvQCTwLzAj8C8gIvAh8CHwLxAw8Dwf2T/VP9E/3wAbL97gLtAt4C7ALOA90D6wO+A9wDzQPqA64D2wO9A8wD6QOeA9oDrQPLA7wD6AOOA9kDnQPnA34DygPR+8H7svtuBZH7nAXlBasFXgWB+30FTgXIBYwFcfvjBdYFbQU+BbkFmwWqBS4F4QUeBdUFXQXHBXwF1AW4BYsFrAG7AdgBjQHgAg4C0AHQAeYByQG6AdcB5AHiAU0FqQWaBcYFbAXTBT0F0gUtBdEFtwV7BR0FxQVcBagFigWZBcQFTAW2BWsFYfrDBTwFpwV6BcIFLAW1BVsFwQUNAcABmAWJBRwFtAVR+bMFQfmhBUsESwSmBWoFlwV5BTH5CQU7BDsEiASIBLIFpQUrBCsEWgWxBRsFlgVpBGkESgRKBAwBsAELAaABCgGQAaH4eASjBDoElQRZBKIEKgQaBIYEaAR3BJQESQSTBDkEpAGHAYUEWASSBHYEZwQpBJEEGQSEBEgEdQRXBIMEOARmBIIEKASBBHQERwQYBJH3ZQRWBHEEgfc3AzcDcwRyBCcDJwOAAQgBcAEHAWQDRgNVAxcDYwM2A1QDRQNiAyYDYQMWA/H2UwM1A0QDYAEGAVIDJQNRA6H2FQIVAkMDNANQAQUBQgIkAjMCQQIUAhQCQAMEAzICMgIjAiMCMQETATACAwIiASIBIAECAQAAAAAAAAAAgqLB0SwcTIwJCQkJCQkJCb7+3u5+Xp2dbT2tzQAAAAD87NzMvKycjHxsXEw8LBwMAAAgAEAAYgAAAIQAtADaACQBbAGqARoCiALqAgAAZgS0BbQFtAW0BbQFtAW0BbQFMgcyBzIHMgcyBzIHMgcyBw==");
                    l(e, 6608, "AQIDBAYICg0EBQYHCAkLDQAAAAAAAIC/F0UhwLp0isD1L8vAT8wIwY9xLsGQP1bBAACAwRvElcHTWqzB07XDwf/I28HvifTBzfcGwgT5E8IAAAAAAACAPxdFIUC6dIpA9S/LQE/MCEGPcS5BkD9WQQAAgEEbxJVB01qsQdO1w0H/yNtB74n0Qc33BkIE+RNCGEUhQt/YLkKBsTxCbMxKQkYnWULov2dCV5R2QmHRgkK6dIpCbTOSQr8MmkIAAKJCigyqQsMxskIXb7pC/sPCQvUvy0KAstNCKkvcQoL55EIgve1CnJX2QpiC/0LbQQRDT8wIQ31gDUM9/hFDaKUWQ9hVG0NpDyBD+dEkQ2WdKUOOcS5DVU4zQ5ozOENCIT1DMBdCQ0kVR0NyG0xDkilRQ5A/VkNUXVtDx4JgQ9GvZUNe5GpDVyBwQ6hjdUM8rnpDAACAQ3CsgkNlXIVD1g+IQ7rGikMIgY1Dtz6QQ8D/kkMbxJVDv4uYQ6VWm0PFJJ5DF/agQ5bKo0M5oqZD+nypQ9NarEO7O69DrR+yQ6QGtUOX8LdDgt26Q17NvUMlwMBD07XDQ2CuxkPIqclDBqjMQxOpz0PqrNJDiLPVQ+W82EP/yNtDztfeQ1Dp4UN//eRDVhToQ9It60PtSe5DomjxQ++J9EPPrfdDPNT6QzT9/UNZlABEWSsCRJnDA0QVXQVEzfcGRL6TCETmMApERc8LRNduDUScDw9EkLEQRLRUEkQE+RNEgJ4VRCZFF0Tz7BhE55UaRABAHEQ86x1EmpcfRBhFIUQ=");
                    l(e, 7222, "gD+MZVg+neZJP65nuz4pTCI/AAAAPwAAAD8pTCI/rme7Pp3mST+MZVg+AACAPw==");
                    l(e, 7280, "qIRbP9i5YT/dGnM/gbp7P0Hafj/9yH8/Zfl/P43/fz/+tQM/2obxPgJzoD50Rzo+HbDBPYbLJz0UoWg8MntyO6DBfz9Vz30/ie55P8smdD9eg2w/JBNjP4HoVz80GUs/Nb48PzyqMj2oqAU+WKJdPhz2mT4V78M+UGrsPniMCT/K1xs/e/MsPwAAgD8AAIA/AACAPwAAgD8AAIA/AACAP1XPfT9eg2w/NBlLPw==");
                    l(e, 7476, "qKgFPhXvwz7K1xs/Nb48PzQZSz+B6Fc/JBNjP16DbD/LJnQ/ie55P1XPfT+gwX8/e/MsP8rXGz94jAk/UGrsPhXvwz4c9pk+WKJdPqioBT48qjI9AAAAAAAAAAA0GUs/XoNsP1XPfT/K1xs/Fe/DPqioBT4AAAAAAAAAAEYKI0GFJwA/jZ4AP0IWWkCLZgE/eMIFP6+yA0Bb9AM/PyMRPxv5vT9o8gc/HZYlPzWwlT84mA0/gMRJPzv6eD86OxU/ScSHP57fVj9uXB8/JnncP+6ZPj89wCw/nDyjQAAAgL8AANBBAAD4wQAAUEMAAFpDAIDIQwDAAcQA8ABFAAD6RACglUUAaKzFAPDeRQA4ukUAOAtHAKgZxwB4kkcAAIC/AADAQQAADMIAAEpDAABeQwCArUMAQBHEAAACRQAA9EQASIpFALi3xQDA7kUAQKVFAP8DRwDYIMcANJJHAACAvwAAqEEAABjCAABEQwAAYUMAAJNDAEAhxABwAkUAoOxEAPB9RQDowsUA4PxFAIiORQCW+UYA/ifHAMORRwAAgL8AAJhBAAAkwgAAPkMAAGNDAAB0QwDAMcQAUAJFAMDjRACQZ0UA6M3FALAERgAAbEUAQOtGABUvx4AkkUcAAIC/AACIQQAANMIAADdDAABkQwAARUMAwELEALABRQBg2UQAcFFFALjYxQAgCkYAcDdFAALdRgAZNscAWpBHAACAvwAAgEEAAETCAAAwQwAAZEMAABlDAABUxACQAEUAgM1EAMA7RQA448UAzA5GAKD+RADkzkYABj3HgGOPRwAAAMAAAGBBAABUwgAAKUMAAGNDAADeQgDAZcQAAP5EAOC/RABwJkUAaO3FALQSRgBAh0QA7MBGANlDx4BBjkcAAADAAABQQQAAaMIAACFDAABgQwAAkEIAwHfEACD6RADAsEQAoBFFADD3xQDgFUYAAIxCACKzRgCNSseA9IxHAAAAwAAAMEEAAHzCAAAaQwAAXUMAABBCAACFxABA9UQAAKBEAMD6RABEAMYAWBhGAIB5xACKpUYAHlHHAH6LRwAAAMAAACBBAACIwgAAE0MAAFdDAAAAQAAgjsQA4O9EAGCNRACA00QArATGABwaRgCgBMUALJhGAIpXxwDfiUcAAEDAAAAQQQAAksIAAAtDAABQQwAA6MEAQJfEAMDpRACAckQAgK1EAMwIxgA8G0YAQE7FAA6LRgDKXceAF4hHAABAwAAAAEEAAJ7CAAAEQwAASEMAAGTCAGCgxAAg40QAgEZEAOCIRACYDMYAuBtGAKiNxQBsfEYA3WPHACqGRwAAgMAAAOBAAACqwgAA+kIAAD1DAACmwgCAqcQA4NtEAEAXRACAS0QADBDGAJwbRgDQtcUAUGNGAL5px4AWhEcAAIDAAADgQAAAtsIAAOpCAAAxQwAA1MIAgLLEAEDURAAAyUMAQAhEACATxgDwGkYAkN/FANBKRgBpb8cA34FHAACgwAAAwEAAAMLCAADeQgAAI0MAAP7CAEC7xABAzEQAADlDAACQQwDEFcYAuBlGAHAFxgD8MkYA3HTHAAp/Rw==")
                }

                function R(S) {
                    var r = S.a;
                    var s = r.buffer;
                    var t = new Int8Array(s);
                    var u = new Int16Array(s);
                    var v = new Int32Array(s);
                    var w = new Uint8Array(s);
                    var x = new Uint16Array(s);
                    var y = new Uint32Array(s);
                    var z = new Float32Array(s);
                    var A = new Float64Array(s);
                    var B = Math.imul;
                    var C = Math.fround;
                    var D = Math.abs;
                    var E = Math.clz32;
                    var F = Math.min;
                    var G = Math.max;
                    var H = Math.floor;
                    var I = Math.ceil;
                    var J = Math.trunc;
                    var K = Math.sqrt;
                    var L = S.abort;
                    var M = NaN;
                    var N = Infinity;
                    var O = 5269808;
                    // EMSCRIPTEN_START_FUNCS
                    function na() {
                        var a = 0,
                            b = 0,
                            c = 0,
                            d = 0,
                            e = 0,
                            f = 0,
                            g = 0,
                            h = 0,
                            i = 0,
                            j = C(0),
                            k = 0,
                            l = C(0),
                            m = C(0),
                            n = 0,
                            o = 0,
                            p = C(0),
                            q = 0,
                            r = 0,
                            s = 0,
                            y = 0,
                            A = 0,
                            D = 0,
                            E = 0,
                            F = 0,
                            G = 0,
                            H = 0,
                            I = C(0),
                            J = C(0),
                            K = 0,
                            L = 0,
                            M = 0,
                            N = 0,
                            P = 0,
                            Q = 0,
                            R = 0,
                            S = 0,
                            T = 0,
                            ga = 0,
                            ha = C(0),
                            ma = C(0),
                            na = C(0),
                            oa = C(0),
                            pa = C(0),
                            qa = C(0),
                            ra = C(0),
                            sa = C(0),
                            ta = 0,
                            ua = 0,
                            va = 0,
                            wa = 0;
                        e = v[4412];
                        K = 17680;
                        s = O - 16256 | 0;
                        O = s;
                        v[s + 16252 >> 2] = 0;
                        a: {
                            b: {
                                c: {
                                    if (w[14808] != 255 | (e | 0) < 5) {
                                        break c
                                    }
                                    if (!Y(14808, 15328)) {
                                        break c
                                    }
                                    b = $(15328, v[3701]) + X(15328) | 0;v[s + 16252 >> 2] = b;
                                    if ((b | 0) == (e | 0)) {
                                        b = e;
                                        break b
                                    }
                                    d: {
                                        if ((e | 0) >= (b + 4 | 0)) {
                                            if (Y(15328, b + 15328 | 0)) {
                                                break d
                                            }
                                        }
                                        v[s + 16252 >> 2] = 0;
                                        break c
                                    }
                                    if (b) {
                                        break b
                                    }
                                }
                                q = Z(8656, 6668) + 6148 | 0;h = s + 16252 | 0;k = 15328;b = e;y = b - 4 | 0;n = (y | 0) > 0 ? y : 0;
                                while (1) {
                                    e: {
                                        f: {
                                            g: {
                                                h: {
                                                    if ((n | 0) == (F | 0)) {
                                                        F = b;
                                                        break h
                                                    }
                                                    if (!ka(k)) {
                                                        break f
                                                    }
                                                    o = 4;g = F + 4 | 0;d = $(k, v[q >> 2]);a = d + X(k) | 0;i: {
                                                        while (1) {
                                                            if (!(o >>> 0 > 2303 | d)) {
                                                                if ((y | 0) <= ((o << 1) + F | 0)) {
                                                                    break i
                                                                }
                                                                d = 0;
                                                                i = k + o | 0;
                                                                j: {
                                                                    if (!Y(k, i)) {
                                                                        break j
                                                                    }
                                                                    c = o - X(k) | 0;E = X(i) + c | 0;
                                                                    if ((b | 0) < (E + (g + o | 0) | 0)) {
                                                                        break j
                                                                    }
                                                                    if (!Y(k, i + E | 0)) {
                                                                        break j
                                                                    }
                                                                    v[q >> 2] = c;d = c;a = o
                                                                }
                                                                o = o + 1 | 0;
                                                                continue
                                                            }
                                                            break
                                                        }
                                                        if (!d | (b | 0) < (a + F | 0)) {
                                                            break i
                                                        }
                                                        g = b - F | 0;c = 0;i = 0;
                                                        while (1) {
                                                            k: {
                                                                l: {
                                                                    if ((i | 0) != 10) {
                                                                        o = (i | 0) != 0;
                                                                        r = c;
                                                                        c = c + k | 0;
                                                                        c = (r + $(c, d) | 0) + X(c) | 0;
                                                                        if ((g | 0) < (c + 4 | 0)) {
                                                                            break k
                                                                        }
                                                                        if (Y(k, c + k | 0)) {
                                                                            break l
                                                                        }
                                                                        o = 0
                                                                    } else {
                                                                        o = 1
                                                                    }
                                                                    break k
                                                                }
                                                                i = i + 1 | 0;
                                                                continue
                                                            }
                                                            break
                                                        }
                                                        if (!o) {
                                                            break i
                                                        }
                                                        f = a;
                                                        break h
                                                    }
                                                    if ((a | 0) != (b | 0) | F) {
                                                        break g
                                                    }
                                                    F = 0;f = b
                                                }
                                                v[h >> 2] = f;
                                                break e
                                            }
                                            v[q >> 2] = 0
                                        }
                                        k = k + 1 | 0;F = F + 1 | 0;
                                        continue
                                    }
                                    break
                                }
                                b = v[s + 16252 >> 2];
                                if ((e | 0) >= (b + F | 0) ? b : 0) {
                                    break b
                                }
                                v[6724] = F;F = 0;
                                break a
                            }
                            H = F + 15328 | 0;v[3702] = w[H | 0] | w[H + 1 | 0] << 8 | (w[H + 2 | 0] << 16 | w[H + 3 | 0] << 24);v[6725] = F;v[6724] = b + F;v[6726] = w[H + 3 | 0] > 191 ? 1 : 2;v[6727] = fa(H);v[6728] = 4 - (w[H + 1 | 0] >>> 1 & 3);v[6729] = ea(H);ca(s + 16240 | 0, H + 4 | 0, b - 4 | 0);
                            if (!(t[H + 1 | 0] & 1)) {
                                U(s + 16240 | 0, 16)
                            }
                            F = 0;
                            if (v[6728] != 3) {
                                break a
                            }
                            c = s + 16240 | 0;b = s + 2828 | 0;f = 0;a = w[H + 1 | 0];e = B((a >>> 3 & 1) + (a >>> 4 & 1) | 0, 3) + (w[H + 2 | 0] >>> 2 & 3) | 0;e = e - ((e | 0) != 0) | 0;o = w[H + 3 | 0] > 191 ? 1 : 2;m: {
                                if (a & 8) {
                                    q = U(c, 9);
                                    o = o << 1;
                                    f = U(c, o + 7 | 0);
                                    break m
                                }
                                q = U(c, o | 8) >>> o | 0
                            }
                            a = B(e, 40);y = a + 1328 | 0;h = a + 1648 | 0;n = B(e, 23) + 1136 | 0;e = -1;k = 0;n: {
                                while (1) {
                                    a = w[H + 3 | 0];
                                    g = U(c, 12);
                                    u[b + 4 >> 1] = g;
                                    d = U(c, 9);
                                    u[b + 6 >> 1] = d;
                                    if ((d & 65535) >>> 0 > 288) {
                                        break n
                                    }
                                    d = a >>> 0 > 191 ? f << 4 : f;
                                    t[b + 10 | 0] = U(c, 8);
                                    a = U(c, w[H + 1 | 0] & 8 ? 4 : 9);
                                    t[b + 13 | 0] = 22;
                                    t[b + 14 | 0] = 0;
                                    v[b >> 2] = n;
                                    u[b + 8 >> 1] = a;
                                    o: {
                                        if (U(c, 1)) {
                                            a = U(c, 2);
                                            t[b + 11 | 0] = a;
                                            if (!(a & 255)) {
                                                break n
                                            }
                                            f = U(c, 1);
                                            u[b + 18 >> 1] = 65287;
                                            t[b + 12 | 0] = f;
                                            if (w[b + 11 | 0] == 2) {
                                                a = b;
                                                p: {
                                                    if (!(f & 255)) {
                                                        v[b >> 2] = y;
                                                        t[b + 18 | 0] = 8;
                                                        i = 39;
                                                        f = 0;
                                                        break p
                                                    }
                                                    v[b >> 2] = h;i = 30;f = w[H + 1 | 0] & 8 ? 8 : 6
                                                }
                                                t[a + 14 | 0] = i;
                                                t[b + 13 | 0] = f;
                                                d = d & 3855
                                            }
                                            a = U(c, 10);
                                            t[b + 21 | 0] = U(c, 3);
                                            t[b + 22 | 0] = U(c, 3);
                                            t[b + 23 | 0] = U(c, 3);
                                            f = a << 5;
                                            break o
                                        }
                                        t[b + 11 | 0] = 0;t[b + 12 | 0] = 0;f = U(c, 15);t[b + 18 | 0] = U(c, 4);a = U(c, 3);t[b + 20 | 0] = 255;t[b + 19 | 0] = a
                                    }
                                    t[b + 17 | 0] = f & 31;
                                    t[b + 15 | 0] = f >>> 10;
                                    t[b + 16 | 0] = f >>> 5 & 31;
                                    k = (g & 65535) + k | 0;
                                    a = b;
                                    q: {
                                        if (w[H + 1 | 0] & 8) {
                                            f = U(c, 1);
                                            break q
                                        }
                                        f = x[b + 8 >> 1] > 499
                                    }
                                    t[a + 24 | 0] = f;
                                    t[b + 25 | 0] = U(c, 1);
                                    a = U(c, 1);
                                    t[b + 27 | 0] = d >>> 12 & 15;
                                    t[b + 26 | 0] = a;
                                    b = b + 28 | 0;
                                    f = d << 4;
                                    o = o - 1 | 0;
                                    if (o) {
                                        continue
                                    }
                                    break
                                }
                                e = (v[c + 4 >> 2] + k | 0) > (v[c + 8 >> 2] + (q << 3) | 0) ? -1 : q
                            }
                            r: {
                                if (!((e | 0) < 0 | v[s + 16244 >> 2] > v[s + 16248 >> 2])) {
                                    a = s + 16240 | 0;
                                    d = v[a + 4 >> 2];
                                    c = v[a + 8 >> 2];
                                    b = v[3700];
                                    f = b - e | 0;
                                    b = (b | 0) > (e | 0) ? e : b;
                                    f = W(s + 12 | 0, ((f | 0) > 0 ? f : 0) + 14812 | 0, b);
                                    k = v[a >> 2] + (v[a + 4 >> 2] / 8 | 0) | 0;
                                    a = (c - d | 0) / 8 | 0;
                                    W(b + f | 0, k, a);
                                    ca(s, f, a + b | 0);
                                    P = v[3700] >= (e | 0);
                                    if (!P) {
                                        break r
                                    }
                                    ta = s + 7708 | 0;
                                    ua = s + 2940 | 0;
                                    while (1) {
                                        if ((w[H + 1 | 0] & 8 ? 2 : 1) >>> 0 <= F >>> 0) {
                                            break r
                                        }
                                        Q = Z(ua, 4608);
                                        a = v[6726];
                                        o = (B(B(a, F), 28) + s | 0) + 2828 | 0;
                                        f = 0;
                                        R = (a | 0) > 0 ? a : 0;
                                        y = s + 7548 | 0;
                                        while (1) {
                                            if ((f | 0) != (R | 0)) {
                                                E = B(f, 28) + o | 0;
                                                h = x[E + 4 >> 1];
                                                g = v[s + 4 >> 2];
                                                b = O - 48 | 0;
                                                O = b;
                                                e = !w[E + 13 | 0] + (w[E + 14 | 0] != 0) | 0;
                                                d = w[E + 25 | 0];
                                                q = f;
                                                i = (B(f, 39) + s | 0) + 16156 | 0;
                                                a = b;
                                                A = a + 44 | 0;
                                                s: {
                                                    if (w[14809] & 8) {
                                                        n = w[E + 27 | 0];
                                                        f = w[x[E + 8 >> 1] + 2064 | 0];
                                                        c = f & 3;
                                                        t[b + 47 | 0] = c;
                                                        t[b + 46 | 0] = c;
                                                        f = f >>> 2 | 0;
                                                        t[b + 45 | 0] = f;
                                                        t[b + 44 | 0] = f;
                                                        e = B(e, 28) + 1968 | 0;
                                                        break s
                                                    }
                                                    f = w[14811] >>> 4 & (q | 0) != 0;c = f ? 12 : 0;G = x[E + 8 >> 1] >>> f | 0;
                                                    while (1) {
                                                        if ((G | 0) >= 0) {
                                                            n = 3;
                                                            r = 1;
                                                            while (1) {
                                                                if ((n | 0) >= 0) {
                                                                    f = w[(c + n | 0) + 2080 | 0];
                                                                    t[(b + 44 | 0) + n | 0] = ((G | 0) / (r | 0) | 0) % (f | 0);
                                                                    n = n - 1 | 0;
                                                                    r = B(f, r);
                                                                    continue
                                                                }
                                                                break
                                                            }
                                                            c = c + 4 | 0;
                                                            G = G - r | 0;
                                                            continue
                                                        }
                                                        break
                                                    }
                                                    n = -16;e = (B(e, 28) + c | 0) + 1968 | 0
                                                }
                                                G = 0;
                                                while (1) {
                                                    t: {
                                                        u: {
                                                            v: {
                                                                if ((G | 0) == 4) {
                                                                    break v
                                                                }
                                                                f = w[e + G | 0];
                                                                if (!f) {
                                                                    break v
                                                                }
                                                                if (n & 8) {
                                                                    W(a, i, f);
                                                                    break u
                                                                }
                                                                c = w[A + G | 0];
                                                                if (!c) {
                                                                    Z(a, f);
                                                                    Z(i, f);
                                                                    break u
                                                                }
                                                                D = (n | 0) > -1 ? -1 : -1 << c ^ -1;r = 0;
                                                                while (1) {
                                                                    if ((f | 0) == (r | 0)) {
                                                                        break u
                                                                    }
                                                                    k = U(s, c);
                                                                    t[i + r | 0] = (k | 0) == (D | 0) ? -1 : k;
                                                                    t[a + r | 0] = k;
                                                                    r = r + 1 | 0;
                                                                    continue
                                                                }
                                                            }
                                                            t[a + 2 | 0] = 0;t[a | 0] = 0;t[a + 1 | 0] = 0;
                                                            break t
                                                        }
                                                        n = n << 1;G = G + 1 | 0;a = a + f | 0;i = f + i | 0;
                                                        continue
                                                    }
                                                    break
                                                }
                                                w: {
                                                    e = w[E + 14 | 0];
                                                    if (e) {
                                                        a = 2 - d | 0;
                                                        f = w[E + 23 | 0] << a;
                                                        c = w[E + 22 | 0] << a;
                                                        i = w[E + 21 | 0] << a;
                                                        k = w[E + 13 | 0];
                                                        n = 0;
                                                        while (1) {
                                                            if (e >>> 0 <= n >>> 0) {
                                                                break w
                                                            }
                                                            a = b + (k + n | 0) | 0;
                                                            t[a | 0] = i + w[a | 0];
                                                            t[a + 1 | 0] = c + w[a + 1 | 0];
                                                            t[a + 2 | 0] = f + w[a + 2 | 0];
                                                            n = n + 3 | 0;
                                                            continue
                                                        }
                                                    }
                                                    if (!w[E + 24 | 0]) {
                                                        break w
                                                    }
                                                    n = 0;
                                                    while (1) {
                                                        if ((n | 0) == 10) {
                                                            break w
                                                        }
                                                        a = b + n | 0;
                                                        t[a + 11 | 0] = w[a + 11 | 0] + w[n + 2104 | 0];
                                                        n = n + 1 | 0;
                                                        continue
                                                    }
                                                }
                                                a = d + 1 | 0;
                                                j = ba(C(2048), ((((w[14811] & 224) == 96) << 1) - w[E + 10 | 0] | 0) + 258 | 0);
                                                e = e + w[E + 13 | 0] | 0;
                                                n = 0;
                                                while (1) {
                                                    if ((e | 0) != (n | 0)) {
                                                        z[y + (n << 2) >> 2] = ba(j, w[b + n | 0] << a);
                                                        n = n + 1 | 0;
                                                        continue
                                                    }
                                                    break
                                                }
                                                O = b + 48 | 0;
                                                k = (B(q, 2304) + s | 0) + 2940 | 0;
                                                i = y;
                                                S = g + h | 0;
                                                j = C(0);
                                                T = v[s >> 2];
                                                e = v[s + 4 >> 2];
                                                a = T + ((e | 0) / 8 | 0) | 0;
                                                b = w[a | 0] | w[a + 1 | 0] << 8 | (w[a + 2 | 0] << 16 | w[a + 3 | 0] << 24);
                                                c = (b << 24 | b << 8 & 16711680 | (b >>> 8 & 65280 | b >>> 24)) << (e & 7);
                                                h = e | -8;
                                                A = a + 4 | 0;
                                                D = v[E >> 2];
                                                n = x[E + 6 >> 1];
                                                e = 0;
                                                while (1) {
                                                    x: {
                                                        y: {
                                                            if ((n | 0) >= 1) {
                                                                b = e + 1 | 0;
                                                                e = e + E | 0;
                                                                a = w[e + 15 | 0];
                                                                ga = (u[(a << 1) + 6528 >> 1] << 1) + 2144 | 0;
                                                                G = w[e + 18 | 0];
                                                                if (a >>> 0 >= 16) {
                                                                    L = w[a + 6592 | 0];
                                                                    va = 32 - L | 0;
                                                                    while (1) {
                                                                        M = w[D | 0] >>> 1 | 0;
                                                                        g = (n | 0) > (M | 0) ? M : n;
                                                                        j = z[i >> 2];
                                                                        while (1) {
                                                                            a = c >>> 27 | 0;
                                                                            e = 5;
                                                                            while (1) {
                                                                                a = u[ga + (a << 1) >> 1];
                                                                                if ((a | 0) <= -1) {
                                                                                    c = c << e;
                                                                                    f = a & 7;
                                                                                    a = (c >>> 32 - f | 0) - (a >> 3) | 0;
                                                                                    h = e + h | 0;
                                                                                    e = f;
                                                                                    continue
                                                                                }
                                                                                break
                                                                            }
                                                                            e = a >> 8;
                                                                            h = e + h | 0;
                                                                            c = c << e;
                                                                            d = 0;
                                                                            while (1) {
                                                                                if ((d | 0) != 2) {
                                                                                    wa = k;
                                                                                    r = a & 15;
                                                                                    z: {
                                                                                        if ((r | 0) == 15) {
                                                                                            h = h + L | 0;
                                                                                            e = c << L;
                                                                                            c = c >>> va | 0;
                                                                                            while (1) {
                                                                                                if ((h | 0) >= 0) {
                                                                                                    e = w[A | 0] << h | e;
                                                                                                    A = A + 1 | 0;
                                                                                                    h = h - 8 | 0;
                                                                                                    continue
                                                                                                }
                                                                                                break
                                                                                            }
                                                                                            p = j;
                                                                                            r = c + 15 | 0;
                                                                                            c = r;
                                                                                            A: {
                                                                                                if ((c | 0) <= 128) {
                                                                                                    m = z[(c << 2) + 6688 >> 2];
                                                                                                    break A
                                                                                                }
                                                                                                f = (c | 0) < 1024;c = f ? c << 3 : c;N = c << 1 & 64;m = C(C((c & 63) - N | 0) / C(N + (c & -64) | 0));m = C((f ? C(16) : C(256)) * C(C(C(m * C(C(m * C(.2222222238779068)) + C(1.3333333730697632))) + C(1)) * z[(c + N >> 6 << 2) + 6688 >> 2]))
                                                                                            }
                                                                                            m = C(C(p * m) * C(((e | 0) > -1 ? 1 : -1) | 0));
                                                                                            break z
                                                                                        }
                                                                                        e = c;m = C(j * z[(((c >>> 27 & 16 | r) ^ 16) << 2) + 6624 >> 2])
                                                                                    }
                                                                                    z[wa >> 2] = m;
                                                                                    a = a >> 4;
                                                                                    k = k + 4 | 0;
                                                                                    d = d + 1 | 0;
                                                                                    f = (r | 0) != 0;
                                                                                    h = f + h | 0;
                                                                                    c = e << f;
                                                                                    continue
                                                                                }
                                                                                break
                                                                            }
                                                                            while (1) {
                                                                                if ((h | 0) >= 0) {
                                                                                    c = w[A | 0] << h | c;
                                                                                    A = A + 1 | 0;
                                                                                    h = h - 8 | 0;
                                                                                    continue
                                                                                }
                                                                                break
                                                                            }
                                                                            g = g - 1 | 0;
                                                                            if (g) {
                                                                                continue
                                                                            }
                                                                            break
                                                                        }
                                                                        i = i + 4 | 0;
                                                                        D = D + 1 | 0;
                                                                        n = n - M | 0;
                                                                        if ((n | 0) < 1) {
                                                                            break y
                                                                        }
                                                                        a = (G | 0) > 0;
                                                                        G = G - 1 | 0;
                                                                        if (a) {
                                                                            continue
                                                                        }
                                                                        break
                                                                    }
                                                                    break y
                                                                }
                                                                while (1) {
                                                                    d = w[D | 0] >>> 1 | 0;
                                                                    r = (d | 0) < (n | 0) ? d : n;
                                                                    j = z[i >> 2];
                                                                    while (1) {
                                                                        e = c >>> 27 | 0;
                                                                        a = 5;
                                                                        while (1) {
                                                                            e = u[ga + (e << 1) >> 1];
                                                                            if ((e | 0) <= -1) {
                                                                                c = c << a;
                                                                                f = e & 7;
                                                                                e = (c >>> 32 - f | 0) - (e >> 3) | 0;
                                                                                h = a + h | 0;
                                                                                a = f;
                                                                                continue
                                                                            }
                                                                            break
                                                                        }
                                                                        a = e >> 8;
                                                                        h = a + h | 0;
                                                                        c = c << a;
                                                                        a = 0;
                                                                        while (1) {
                                                                            if ((a | 0) != 2) {
                                                                                f = e & 15;
                                                                                z[k >> 2] = j * z[(((f | c >>> 27 & 16) ^ 16) << 2) + 6624 >> 2];
                                                                                e = e >> 4;
                                                                                k = k + 4 | 0;
                                                                                a = a + 1 | 0;
                                                                                f = (f | 0) != 0;
                                                                                h = f + h | 0;
                                                                                c = c << f;
                                                                                continue
                                                                            }
                                                                            break
                                                                        }
                                                                        while (1) {
                                                                            if ((h | 0) >= 0) {
                                                                                c = w[A | 0] << h | c;
                                                                                A = A + 1 | 0;
                                                                                h = h - 8 | 0;
                                                                                continue
                                                                            }
                                                                            break
                                                                        }
                                                                        r = r - 1 | 0;
                                                                        if (r) {
                                                                            continue
                                                                        }
                                                                        break
                                                                    }
                                                                    i = i + 4 | 0;
                                                                    D = D + 1 | 0;
                                                                    n = n - d | 0;
                                                                    if ((n | 0) < 1) {
                                                                        break y
                                                                    }
                                                                    a = (G | 0) > 0;
                                                                    G = G - 1 | 0;
                                                                    if (a) {
                                                                        continue
                                                                    }
                                                                    break
                                                                }
                                                                break y
                                                            }
                                                            b = w[E + 26 | 0] ? 6512 : 6480;a = 1 - n | 0;
                                                            while (1) {
                                                                B: {
                                                                    e = w[b + (c >>> 28 | 0) | 0];
                                                                    if (!(e & 8)) {
                                                                        e = w[b + ((c << 4 >>> 32 - (e & 3)) + (e >>> 3) | 0) | 0]
                                                                    }
                                                                    f = e & 7;h = f + h | 0;
                                                                    if ((S | 0) < ((h + (A - T << 3) | 0) - 24 | 0)) {
                                                                        break B
                                                                    }
                                                                    a = a - 1 | 0;
                                                                    if (!a) {
                                                                        a = w[D | 0];
                                                                        if (a >>> 0 < 2) {
                                                                            break B
                                                                        }
                                                                        D = D + 1 | 0;
                                                                        j = z[i >> 2];
                                                                        i = i + 4 | 0;
                                                                        a = a >>> 1 | 0
                                                                    }
                                                                    c = c << f;
                                                                    if (e & 128) {
                                                                        z[k >> 2] = (c | 0) < 0 ? C(-j) : j;
                                                                        h = h + 1 | 0;
                                                                        c = c << 1
                                                                    }
                                                                    if (e & 64) {
                                                                        z[k + 4 >> 2] = (c | 0) < 0 ? C(-j) : j;
                                                                        h = h + 1 | 0;
                                                                        c = c << 1
                                                                    }
                                                                    a = a - 1 | 0;
                                                                    if (!a) {
                                                                        a = w[D | 0];
                                                                        if (a >>> 0 < 2) {
                                                                            break B
                                                                        }
                                                                        D = D + 1 | 0;
                                                                        j = z[i >> 2];
                                                                        i = i + 4 | 0;
                                                                        a = a >>> 1 | 0
                                                                    }
                                                                    if (e & 32) {
                                                                        z[k + 8 >> 2] = (c | 0) < 0 ? C(-j) : j;
                                                                        h = h + 1 | 0;
                                                                        c = c << 1
                                                                    }
                                                                    if (e & 16) {
                                                                        z[k + 12 >> 2] = (c | 0) < 0 ? C(-j) : j;
                                                                        h = h + 1 | 0;
                                                                        c = c << 1
                                                                    }
                                                                    while (1) {
                                                                        if ((h | 0) >= 0) {
                                                                            c = w[A | 0] << h | c;
                                                                            A = A + 1 | 0;
                                                                            h = h - 8 | 0;
                                                                            continue
                                                                        }
                                                                        break
                                                                    }
                                                                    k = k + 16 | 0;
                                                                    continue
                                                                }
                                                                break
                                                            }
                                                            v[s + 4 >> 2] = S;
                                                            break x
                                                        }
                                                        e = b;
                                                        continue
                                                    }
                                                    break
                                                }
                                                f = q + 1 | 0;
                                                continue
                                            }
                                            break
                                        }
                                        a = w[14811];
                                        C: {
                                            if (a & 16) {
                                                d = 0;
                                                a = O - 16 | 0;
                                                O = a;
                                                g = s + 2940 | 0;
                                                q = g + 2304 | 0;
                                                f = v[o >> 2];
                                                c = w[o + 14 | 0];
                                                k = c + w[o + 13 | 0] | 0;
                                                b = k;
                                                e = a + 4 | 0;
                                                v[e + 8 >> 2] = -1;
                                                v[e >> 2] = -1;
                                                v[e + 4 >> 2] = -1;
                                                y = b ? b : 0;
                                                while (1) {
                                                    if ((d | 0) != (y | 0)) {
                                                        h = d + f | 0;
                                                        i = w[h | 0];
                                                        b = 0;
                                                        D: {
                                                            while (1) {
                                                                if (b >>> 0 >= i >>> 0) {
                                                                    break D
                                                                }
                                                                n = b << 2;
                                                                if (z[n + q >> 2] == C(0)) {
                                                                    b = b + 2 | 0;
                                                                    if (z[(n | 4) + q >> 2] == C(0)) {
                                                                        continue
                                                                    }
                                                                }
                                                                break
                                                            }
                                                            v[e + ((d >>> 0) % 3 << 2) >> 2] = d;i = w[h | 0]
                                                        }
                                                        d = d + 1 | 0;
                                                        q = (i << 2) + q | 0;
                                                        continue
                                                    }
                                                    break
                                                }
                                                if (w[o + 13 | 0]) {
                                                    b = v[a + 12 >> 2];
                                                    e = v[a + 8 >> 2];
                                                    f = v[a + 4 >> 2];
                                                    e = (e | 0) > (f | 0) ? e : f;
                                                    b = (b | 0) > (e | 0) ? b : e;
                                                    v[a + 12 >> 2] = b;
                                                    v[a + 8 >> 2] = b;
                                                    v[a + 4 >> 2] = b
                                                }
                                                e = s + 16195 | 0;
                                                b = c ? 3 : 1;
                                                c = k - b | 0;
                                                d = 0;
                                                while (1) {
                                                    if ((b | 0) != (d | 0)) {
                                                        i = c + d | 0;
                                                        f = i - b | 0;
                                                        if ((f | 0) <= v[(a + 4 | 0) + (d << 2) >> 2]) {
                                                            f = w[14809] << 28 >> 31 & 3
                                                        } else {
                                                            f = w[e + f | 0]
                                                        }
                                                        t[e + i | 0] = f;
                                                        d = d + 1 | 0;
                                                        continue
                                                    }
                                                    break
                                                }
                                                i = v[o >> 2];
                                                k = a + 4 | 0;
                                                q = u[o + 36 >> 1] & 1;
                                                b = 0;
                                                y = w[14809] & 8 ? 7 : 64;
                                                while (1) {
                                                    h = b + i | 0;
                                                    d = w[h | 0];
                                                    if (d) {
                                                        c = w[14811] & 32;
                                                        E: {
                                                            F: {
                                                                if (v[k + ((b >>> 0) % 3 << 2) >> 2] >= (b | 0)) {
                                                                    break F
                                                                }
                                                                f = w[b + e | 0];
                                                                if (f >>> 0 >= y >>> 0) {
                                                                    break F
                                                                }
                                                                m = c ? C(1.4142135381698608) : C(1);p = m;G: {
                                                                    if (w[14809] & 8) {
                                                                        f = f << 3;
                                                                        j = z[f + 7220 >> 2];
                                                                        l = z[f + 7216 >> 2];
                                                                        break G
                                                                    }
                                                                    l = ba(C(1), f + 1 >>> 1 << q);f = f & 1;j = f ? C(1) : l;l = f ? l : C(1)
                                                                }
                                                                l = C(p * l);m = C(m * j);f = 0;c = d ? d : 0;
                                                                while (1) {
                                                                    if ((c | 0) != (f | 0)) {
                                                                        d = (f << 2) + g | 0;
                                                                        j = z[d >> 2];
                                                                        z[d + 2304 >> 2] = j * m;
                                                                        z[d >> 2] = j * l;
                                                                        f = f + 1 | 0;
                                                                        continue
                                                                    }
                                                                    break
                                                                }
                                                                break E
                                                            }
                                                            if (!c) {
                                                                break E
                                                            }
                                                            ja(g, d)
                                                        }
                                                        b = b + 1 | 0;
                                                        g = (w[h | 0] << 2) + g | 0;
                                                        continue
                                                    }
                                                    break
                                                }
                                                O = a + 16 | 0;
                                                break C
                                            }
                                            if ((a & 224) != 96) {
                                                break C
                                            }
                                            ja(s + 2940 | 0, 576)
                                        }
                                        e = s + 7708 | 0;
                                        f = 0;
                                        while (1) {
                                            if ((f | 0) != (R | 0)) {
                                                a = w[14809];
                                                y = (w[o + 12 | 0] != 0) << 1 << ((B((a >>> 3 & 1) + (a >>> 4 & 1) | 0, 3) + (w[14810] >>> 2 & 3) | 0) == 2);
                                                a = (B(f, 2304) + s | 0) + 2940 | 0;
                                                b = a;
                                                if (w[o + 14 | 0]) {
                                                    c = v[o >> 2] + w[o + 13 | 0] | 0;
                                                    h = ((B(f, 2304) + s | 0) + B(y, 72) | 0) + 2940 | 0;
                                                    g = h;
                                                    q = e;
                                                    while (1) {
                                                        d = w[c | 0];
                                                        if (d) {
                                                            i = d << 1;
                                                            k = 0;
                                                            while (1) {
                                                                if ((d | 0) != (k | 0)) {
                                                                    z[q >> 2] = z[g >> 2];
                                                                    z[q + 4 >> 2] = z[(d << 2) + g >> 2];
                                                                    z[q + 8 >> 2] = z[(i << 2) + g >> 2];
                                                                    g = g + 4 | 0;
                                                                    k = k + 1 | 0;
                                                                    q = q + 12 | 0;
                                                                    continue
                                                                }
                                                                break
                                                            }
                                                            c = c + 3 | 0;
                                                            g = (i << 2) + g | 0;
                                                            continue
                                                        }
                                                        break
                                                    }
                                                    W(h, e, q - e | 0);
                                                    k = y - 1 | 0
                                                } else {
                                                    k = 31
                                                }
                                                while (1) {
                                                    i = 0;
                                                    if ((k | 0) >= 1) {
                                                        while (1) {
                                                            if ((i | 0) != 8) {
                                                                d = i << 2;
                                                                c = d + b | 0;
                                                                j = z[c + 72 >> 2];
                                                                g = c;
                                                                l = z[d + 7280 >> 2];
                                                                c = (17 - i << 2) + b | 0;
                                                                m = z[c >> 2];
                                                                p = z[d + 7312 >> 2];
                                                                z[g + 72 >> 2] = C(j * l) - C(m * p);
                                                                z[c >> 2] = C(m * l) + C(j * p);
                                                                i = i + 1 | 0;
                                                                continue
                                                            }
                                                            break
                                                        }
                                                        b = b + 72 | 0;
                                                        k = k - 1 | 0;
                                                        continue
                                                    }
                                                    break
                                                }
                                                d = a;
                                                b = B(f, 1152) + 8656 | 0;
                                                c = w[o + 11 | 0];
                                                if (y) {
                                                    ia(d, b, 7344, y);
                                                    d = B(y, 72) + d | 0;
                                                    b = B(y, 36) + b | 0
                                                }
                                                H: {
                                                    if ((c | 0) == 2) {
                                                        i = 32 - y | 0;
                                                        c = O - 80 | 0;
                                                        O = c;
                                                        q = c | 8;
                                                        y = c | 4;
                                                        while (1) {
                                                            if ((i | 0) >= 1) {
                                                                k = W(c, d, 72);
                                                                h = v[b + 20 >> 2];
                                                                v[d + 16 >> 2] = v[b + 16 >> 2];
                                                                v[d + 20 >> 2] = h;
                                                                h = v[b + 12 >> 2];
                                                                v[d + 8 >> 2] = v[b + 8 >> 2];
                                                                v[d + 12 >> 2] = h;
                                                                h = v[b + 4 >> 2];
                                                                v[d >> 2] = v[b >> 2];
                                                                v[d + 4 >> 2] = h;
                                                                g = k;
                                                                k = b + 24 | 0;
                                                                aa(g, d + 24 | 0, k);
                                                                aa(y, d + 48 | 0, k);
                                                                aa(q, b, k);
                                                                d = d + 72 | 0;
                                                                b = b + 36 | 0;
                                                                i = i - 1 | 0;
                                                                continue
                                                            }
                                                            break
                                                        }
                                                        O = c + 80 | 0;
                                                        break H
                                                    }
                                                    ia(d, b, B((c | 0) == 3, 72) + 7344 | 0, 32 - y | 0)
                                                }
                                                d = 0;
                                                a = a + 72 | 0;
                                                while (1) {
                                                    b = 1;
                                                    if (d >>> 0 <= 31) {
                                                        while (1) {
                                                            if (b >>> 0 <= 17) {
                                                                c = (b << 2) + a | 0;
                                                                z[c >> 2] = -z[c >> 2];
                                                                b = b + 2 | 0;
                                                                continue
                                                            }
                                                            break
                                                        }
                                                        a = a + 144 | 0;
                                                        d = d + 2 | 0;
                                                        continue
                                                    }
                                                    break
                                                }
                                                o = o + 28 | 0;
                                                f = f + 1 | 0;
                                                continue
                                            }
                                            break
                                        }
                                        f = 0;
                                        o = v[6726];
                                        n = (o | 0) > 0 ? o : 0;
                                        while (1) {
                                            if ((f | 0) != (n | 0)) {
                                                E = B(f, 2304) + Q | 0;
                                                q = 0;
                                                e = O - 128 | 0;
                                                i = e + 96 | 0;
                                                k = e - -64 | 0;
                                                y = e + 32 | 0;
                                                while (1) {
                                                    if ((q | 0) != 18) {
                                                        d = E + (q << 2) | 0;
                                                        b = 0;
                                                        a = e;
                                                        g = a;
                                                        c = 0;
                                                        while (1) {
                                                            if ((c | 0) != 8) {
                                                                j = z[B(15 - c | 0, 72) + d >> 2];
                                                                h = B(c, 72) + d | 0;
                                                                l = z[h + 1152 >> 2];
                                                                m = C(j + l);
                                                                p = z[h >> 2];
                                                                I = z[B(31 - c | 0, 72) + d >> 2];
                                                                J = C(p + I);
                                                                z[g >> 2] = m + J;
                                                                h = B(c, 12);
                                                                j = C(C(j - l) * z[h + 7600 >> 2]);
                                                                l = C(C(p - I) * z[h + 7604 >> 2]);
                                                                z[g + 64 >> 2] = j + l;
                                                                p = C(J - m);
                                                                m = z[h + 7608 >> 2];
                                                                z[g + 32 >> 2] = p * m;
                                                                z[g + 96 >> 2] = C(l - j) * m;
                                                                g = g + 4 | 0;
                                                                c = c + 1 | 0;
                                                                continue
                                                            }
                                                            break
                                                        }
                                                        while (1) {
                                                            if ((b | 0) != 4) {
                                                                m = z[a + 8 >> 2];
                                                                p = z[a + 20 >> 2];
                                                                l = C(m + p);
                                                                I = z[a + 4 >> 2];
                                                                J = z[a + 24 >> 2];
                                                                ha = C(I + J);
                                                                j = C(l + ha);
                                                                ma = z[a + 12 >> 2];
                                                                na = z[a + 16 >> 2];
                                                                oa = C(ma + na);
                                                                pa = z[a >> 2];
                                                                qa = z[a + 28 >> 2];
                                                                ra = C(pa + qa);
                                                                sa = C(oa + ra);
                                                                z[a >> 2] = j + sa;
                                                                z[a + 16 >> 2] = C(sa - j) * C(.7071067690849304);
                                                                j = C(ra - oa);
                                                                l = C(C(j + C(ha - l)) * C(.7071067690849304));
                                                                z[a + 24 >> 2] = C(j - l) * C(1.3065630197525024);
                                                                z[a + 8 >> 2] = C(j + l) * C(.5411961078643799);
                                                                j = C(pa - qa);
                                                                m = C(m - p);
                                                                p = C(I - J);
                                                                I = C(C(m + p) * C(.7071067690849304));
                                                                l = C(j + I);
                                                                p = C(p + j);
                                                                m = C(C(C(ma - na) + m) - C(p * C(.1989123672246933)));
                                                                p = C(p + C(m * C(.3826834261417389)));
                                                                z[a + 28 >> 2] = C(l - p) * C(2.562915563583374);
                                                                z[a + 4 >> 2] = C(l + p) * C(.509795606136322);
                                                                j = C(j - I);
                                                                l = C(m - C(p * C(.1989123672246933)));
                                                                z[a + 20 >> 2] = C(j + l) * C(.8999761939048767);
                                                                z[a + 12 >> 2] = C(j - l) * C(.601344883441925);
                                                                a = a + 32 | 0;
                                                                b = b + 1 | 0;
                                                                continue
                                                            }
                                                            break
                                                        }
                                                        a = 0;
                                                        while (1) {
                                                            if ((a | 0) != 7) {
                                                                b = a << 2;
                                                                z[d >> 2] = z[b + e >> 2];
                                                                j = z[b + i >> 2];
                                                                a = a + 1 | 0;
                                                                c = a << 2;
                                                                l = z[c + i >> 2];
                                                                z[d + 72 >> 2] = C(z[b + k >> 2] + j) + l;
                                                                z[d + 144 >> 2] = z[b + y >> 2] + z[c + y >> 2];
                                                                z[d + 216 >> 2] = l + C(j + z[c + k >> 2]);
                                                                d = d + 288 | 0;
                                                                continue
                                                            }
                                                            break
                                                        }
                                                        z[d >> 2] = z[e + 28 >> 2];
                                                        j = z[e + 124 >> 2];
                                                        z[d + 72 >> 2] = z[e + 92 >> 2] + j;
                                                        l = z[e + 60 >> 2];
                                                        z[d + 216 >> 2] = j;
                                                        z[d + 144 >> 2] = l;
                                                        q = q + 1 | 0;
                                                        continue
                                                    }
                                                    break
                                                }
                                                f = f + 1 | 0;
                                                continue
                                            }
                                            break
                                        }
                                        n = W(ta, 10960, 3840);
                                        G = o << 5;
                                        f = 0;
                                        while (1) {
                                            if (f >>> 0 <= 17) {
                                                a = O - 32 | 0;
                                                O = a;
                                                b = n + (f << 8) | 0;
                                                k = (f << 2) + Q | 0;
                                                z[b + 4080 >> 2] = z[k + 1152 >> 2];
                                                e = o - 1 | 0;
                                                q = k + B(e, 2304) | 0;
                                                z[b + 4084 >> 2] = z[q + 1152 >> 2];
                                                z[b + 4088 >> 2] = z[k >> 2];
                                                z[b + 4092 >> 2] = z[q >> 2];
                                                z[b + 4336 >> 2] = z[k + 1156 >> 2];
                                                z[b + 4340 >> 2] = z[q + 1156 >> 2];
                                                z[b + 4344 >> 2] = z[k + 4 >> 2];
                                                z[b + 4348 >> 2] = z[q + 4 >> 2];
                                                y = (B(f, G) << 2) + K | 0;
                                                h = y + (e << 2) | 0;
                                                _(h, o, b + 244 | 0);
                                                e = o << 7;
                                                _(e + h | 0, o, b + 500 | 0);
                                                _(y, o, b + 240 | 0);
                                                _(e + y | 0, o, b + 496 | 0);
                                                E = b + 3840 | 0;
                                                c = 14;
                                                i = 7696;
                                                while (1) {
                                                    if ((c | 0) >= 0) {
                                                        g = c << 4;
                                                        e = g + E | 0;
                                                        d = B(31 - c | 0, 72);
                                                        z[e >> 2] = z[d + k >> 2];
                                                        z[e + 4 >> 2] = z[d + q >> 2];
                                                        d = d | 4;
                                                        z[e + 8 >> 2] = z[d + k >> 2];
                                                        z[e + 12 >> 2] = z[d + q >> 2];
                                                        d = B(c, 72);
                                                        r = d + 76 | 0;
                                                        z[e + 256 >> 2] = z[r + k >> 2];
                                                        z[e + 260 >> 2] = z[q + r >> 2];
                                                        d = d + 72 | 0;
                                                        z[e - 248 >> 2] = z[d + k >> 2];
                                                        z[e - 244 >> 2] = z[d + q >> 2];
                                                        r = c << 2;
                                                        A = b + g | 0;
                                                        j = z[i + 4 >> 2];
                                                        l = z[i >> 2];
                                                        d = 0;
                                                        while (1) {
                                                            if ((d | 0) != 4) {
                                                                g = d << 2;
                                                                m = z[g + e >> 2];
                                                                p = z[g + A >> 2];
                                                                z[g + (a + 16 | 0) >> 2] = C(l * m) - C(j * p);
                                                                z[a + g >> 2] = C(j * m) + C(l * p);
                                                                d = d + 1 | 0;
                                                                continue
                                                            }
                                                            break
                                                        }
                                                        e = E + (r << 2) | 0;
                                                        r = e - 3584 | 0;
                                                        A = e - 256 | 0;
                                                        j = z[i + 12 >> 2];
                                                        l = z[i + 8 >> 2];
                                                        d = 0;
                                                        while (1) {
                                                            if ((d | 0) != 4) {
                                                                g = d << 2;
                                                                D = g + a | 0;
                                                                m = z[g + A >> 2];
                                                                p = z[g + r >> 2];
                                                                z[D >> 2] = z[D >> 2] + C(C(j * m) + C(l * p));
                                                                g = g + (a + 16 | 0) | 0;
                                                                z[g >> 2] = C(C(j * p) - C(l * m)) + z[g >> 2];
                                                                d = d + 1 | 0;
                                                                continue
                                                            }
                                                            break
                                                        }
                                                        r = e - 3328 | 0;
                                                        A = e - 512 | 0;
                                                        j = z[i + 20 >> 2];
                                                        l = z[i + 16 >> 2];
                                                        d = 0;
                                                        while (1) {
                                                            if ((d | 0) != 4) {
                                                                g = d << 2;
                                                                D = g + a | 0;
                                                                m = z[g + A >> 2];
                                                                p = z[g + r >> 2];
                                                                z[D >> 2] = z[D >> 2] + C(C(j * m) + C(l * p));
                                                                g = g + (a + 16 | 0) | 0;
                                                                z[g >> 2] = C(C(l * m) - C(j * p)) + z[g >> 2];
                                                                d = d + 1 | 0;
                                                                continue
                                                            }
                                                            break
                                                        }
                                                        r = e - 3072 | 0;
                                                        A = e - 768 | 0;
                                                        j = z[i + 28 >> 2];
                                                        l = z[i + 24 >> 2];
                                                        d = 0;
                                                        while (1) {
                                                            if ((d | 0) != 4) {
                                                                g = d << 2;
                                                                D = g + a | 0;
                                                                m = z[g + A >> 2];
                                                                p = z[g + r >> 2];
                                                                z[D >> 2] = z[D >> 2] + C(C(j * m) + C(l * p));
                                                                g = g + (a + 16 | 0) | 0;
                                                                z[g >> 2] = C(C(j * p) - C(l * m)) + z[g >> 2];
                                                                d = d + 1 | 0;
                                                                continue
                                                            }
                                                            break
                                                        }
                                                        r = e - 2816 | 0;
                                                        A = e - 1024 | 0;
                                                        j = z[i + 36 >> 2];
                                                        l = z[i + 32 >> 2];
                                                        d = 0;
                                                        while (1) {
                                                            if ((d | 0) != 4) {
                                                                g = d << 2;
                                                                D = g + a | 0;
                                                                m = z[g + A >> 2];
                                                                p = z[g + r >> 2];
                                                                z[D >> 2] = z[D >> 2] + C(C(j * m) + C(l * p));
                                                                g = g + (a + 16 | 0) | 0;
                                                                z[g >> 2] = C(C(l * m) - C(j * p)) + z[g >> 2];
                                                                d = d + 1 | 0;
                                                                continue
                                                            }
                                                            break
                                                        }
                                                        r = e - 2560 | 0;
                                                        A = e - 1280 | 0;
                                                        j = z[i + 44 >> 2];
                                                        l = z[i + 40 >> 2];
                                                        d = 0;
                                                        while (1) {
                                                            if ((d | 0) != 4) {
                                                                g = d << 2;
                                                                D = g + a | 0;
                                                                m = z[g + A >> 2];
                                                                p = z[g + r >> 2];
                                                                z[D >> 2] = z[D >> 2] + C(C(j * m) + C(l * p));
                                                                g = g + (a + 16 | 0) | 0;
                                                                z[g >> 2] = C(C(j * p) - C(l * m)) + z[g >> 2];
                                                                d = d + 1 | 0;
                                                                continue
                                                            }
                                                            break
                                                        }
                                                        r = e - 2304 | 0;
                                                        A = e - 1536 | 0;
                                                        j = z[i + 52 >> 2];
                                                        l = z[i + 48 >> 2];
                                                        d = 0;
                                                        while (1) {
                                                            if ((d | 0) != 4) {
                                                                g = d << 2;
                                                                D = g + a | 0;
                                                                m = z[g + A >> 2];
                                                                p = z[g + r >> 2];
                                                                z[D >> 2] = z[D >> 2] + C(C(j * m) + C(l * p));
                                                                g = g + (a + 16 | 0) | 0;
                                                                z[g >> 2] = C(C(l * m) - C(j * p)) + z[g >> 2];
                                                                d = d + 1 | 0;
                                                                continue
                                                            }
                                                            break
                                                        }
                                                        g = e - 2048 | 0;
                                                        r = e - 1792 | 0;
                                                        j = z[i + 60 >> 2];
                                                        l = z[i + 56 >> 2];
                                                        d = 0;
                                                        while (1) {
                                                            if ((d | 0) != 4) {
                                                                e = d << 2;
                                                                A = e + a | 0;
                                                                m = z[e + r >> 2];
                                                                p = z[e + g >> 2];
                                                                z[A >> 2] = z[A >> 2] + C(C(j * m) + C(l * p));
                                                                e = e + (a + 16 | 0) | 0;
                                                                z[e >> 2] = C(C(j * p) - C(l * m)) + z[e >> 2];
                                                                d = d + 1 | 0;
                                                                continue
                                                            }
                                                            break
                                                        }
                                                        e = B(o, 15 - c | 0) << 2;
                                                        z[e + h >> 2] = V(z[a + 20 >> 2]);
                                                        d = B(o, c + 17 | 0) << 2;
                                                        z[d + h >> 2] = V(z[a + 4 >> 2]);
                                                        z[e + y >> 2] = V(z[a + 16 >> 2]);
                                                        z[d + y >> 2] = V(z[a >> 2]);
                                                        e = B(o, 47 - c | 0) << 2;
                                                        z[e + h >> 2] = V(z[a + 28 >> 2]);
                                                        d = B(o, c + 49 | 0) << 2;
                                                        z[d + h >> 2] = V(z[a + 12 >> 2]);
                                                        z[e + y >> 2] = V(z[a + 24 >> 2]);
                                                        z[d + y >> 2] = V(z[a + 8 >> 2]);
                                                        c = c - 1 | 0;
                                                        i = i - -64 | 0;
                                                        continue
                                                    }
                                                    break
                                                }
                                                O = a + 32 | 0;
                                                f = f + 2 | 0;
                                                continue
                                            }
                                            break
                                        }
                                        I: {
                                            if ((o | 0) == 1) {
                                                f = 0;
                                                while (1) {
                                                    if (f >>> 0 > 959) {
                                                        break I
                                                    }
                                                    a = f << 2;
                                                    z[a + 10960 >> 2] = z[(a + n | 0) + 4608 >> 2];
                                                    f = f + 2 | 0;
                                                    continue
                                                }
                                            }
                                            W(10960, n + 4608 | 0, 3840)
                                        }
                                        F = F + 1 | 0;
                                        K = B(v[6726], 2304) + K | 0;
                                        continue
                                    }
                                }
                                la();
                                break a
                            }
                            F = v[s + 8 >> 2] >>> 3 | 0;d = v[s + 4 >> 2] + 7 >>> 3 | 0;a = F - d | 0;f = (a | 0) > 511;e = f ? 511 : a;
                            if ((a | 0) >= 1) {
                                J: {
                                    b = e;f = ((f ? F - 511 | 0 : d) + s | 0) + 12 | 0;
                                    if (f >>> 0 > 14812) {
                                        W(14812, f, b);
                                        break J
                                    }
                                    if (b) {
                                        a = b + 14812 | 0;
                                        f = b + f | 0;
                                        while (1) {
                                            a = a - 1 | 0;
                                            f = f - 1 | 0;
                                            t[a | 0] = w[f | 0];
                                            b = b - 1 | 0;
                                            if (b) {
                                                continue
                                            }
                                            break
                                        }
                                    }
                                }
                            }
                            v[3700] = e;F = B(da(14808), P)
                        }
                        O = s + 16256 | 0;
                        v[4413] = F;
                        v[4414] = v[6724];
                        a = v[6727];
                        v[4415] = v[6726];
                        v[4416] = a
                    }

                    function ia(a, b, c, d) {
                        var e = 0,
                            f = C(0),
                            g = 0,
                            h = C(0),
                            i = 0,
                            j = 0,
                            k = 0,
                            l = C(0),
                            m = C(0),
                            n = C(0),
                            o = 0;
                        e = O - 96 | 0;
                        O = e;
                        o = (d | 0) > 0 ? d : 0;
                        while (1) {
                            if ((j | 0) != (o | 0)) {
                                z[e + 48 >> 2] = -z[a >> 2];
                                z[e >> 2] = z[a + 68 >> 2];
                                d = 0;
                                while (1) {
                                    if ((d | 0) != 4) {
                                        i = (e + 48 | 0) + (d << 3) | 0;
                                        g = (d << 4) + a | 0;
                                        h = z[g + 4 >> 2];
                                        f = z[g + 8 >> 2];
                                        z[i + 4 >> 2] = h + f;
                                        k = d << 1;
                                        z[(8 - k << 2) + e >> 2] = h - f;
                                        h = z[g + 16 >> 2];
                                        f = z[g + 12 >> 2];
                                        z[(7 - k << 2) + e >> 2] = h - f;
                                        z[i + 8 >> 2] = -C(h + f);
                                        d = d + 1 | 0;
                                        continue
                                    }
                                    break
                                }
                                ha(e + 48 | 0);
                                ha(e);
                                z[e + 4 >> 2] = -z[e + 4 >> 2];
                                z[e + 12 >> 2] = -z[e + 12 >> 2];
                                z[e + 20 >> 2] = -z[e + 20 >> 2];
                                z[e + 28 >> 2] = -z[e + 28 >> 2];
                                g = 0;
                                while (1) {
                                    if ((g | 0) != 9) {
                                        d = g << 2;
                                        i = d + b | 0;
                                        h = z[i >> 2];
                                        f = z[d + (e + 48 | 0) >> 2];
                                        l = z[d + 7488 >> 2];
                                        m = z[d + 7524 >> 2];
                                        n = z[d + e >> 2];
                                        z[i >> 2] = C(f * l) - C(m * n);
                                        i = a + d | 0;
                                        d = c + d | 0;
                                        f = C(C(f * m) + C(n * l));
                                        z[i >> 2] = C(h * z[d >> 2]) - C(f * z[d + 36 >> 2]);
                                        z[(17 - g << 2) + a >> 2] = C(h * z[d + 36 >> 2]) + C(f * z[d >> 2]);
                                        g = g + 1 | 0;
                                        continue
                                    }
                                    break
                                }
                                b = b + 36 | 0;
                                a = a + 72 | 0;
                                j = j + 1 | 0;
                                continue
                            }
                            break
                        }
                        O = e + 96 | 0
                    }

                    function ha(a) {
                        var b = C(0),
                            c = C(0),
                            d = C(0),
                            e = C(0),
                            f = C(0),
                            g = C(0),
                            h = C(0),
                            i = C(0),
                            j = C(0),
                            k = C(0),
                            l = C(0),
                            m = C(0),
                            n = C(0),
                            o = C(0);
                        f = z[a >> 2];
                        i = z[a + 24 >> 2];
                        c = C(f - i);
                        d = z[a + 16 >> 2];
                        b = z[a + 32 >> 2];
                        g = z[a + 8 >> 2];
                        e = C(d + C(b - g));
                        z[a + 16 >> 2] = c + e;
                        j = C(c - C(e * C(.5)));
                        c = z[a + 4 >> 2];
                        e = z[a + 20 >> 2];
                        h = z[a + 28 >> 2];
                        k = C(C(C(c - e) - h) * C(.8660253882408142));
                        z[a + 4 >> 2] = j + k;
                        l = C(C(d - b) * C(.1736481785774231));
                        f = C(f + C(i * C(.5)));
                        i = C(C(g + b) * C(.7660444378852844));
                        m = C(l + C(f - i));
                        n = C(C(c + e) * C(.9848077297210693));
                        b = C(z[a + 12 >> 2] * C(.8660253882408142));
                        c = C(C(c + h) * C(.6427876353263855));
                        o = C(C(n - b) - c);
                        z[a + 12 >> 2] = m + o;
                        z[a + 20 >> 2] = m - o;
                        z[a + 28 >> 2] = j - k;
                        d = C(C(g + d) * C(.9396926164627075));
                        g = C(C(d + f) - l);
                        e = C(C(e - h) * C(.3420201539993286));
                        h = C(C(e - b) - n);
                        z[a + 32 >> 2] = g + h;
                        d = C(C(f - d) + i);
                        b = C(C(b + e) - c);
                        z[a + 24 >> 2] = d + b;
                        z[a + 8 >> 2] = d - b;
                        z[a >> 2] = g - h
                    }

                    function _(a, b, c) {
                        z[a >> 2] = V(C(C(z[c + 1792 >> 2] * C(75038)) + C(C(C(C(C(C(C(C(z[c + 3584 >> 2] - z[c >> 2]) * C(29)) + C(C(z[c + 256 >> 2] + z[c + 3328 >> 2]) * C(213))) + C(C(z[c + 3072 >> 2] - z[c + 512 >> 2]) * C(459))) + C(C(z[c + 768 >> 2] + z[c + 2816 >> 2]) * C(2037))) + C(C(z[c + 2560 >> 2] - z[c + 1024 >> 2]) * C(5153))) + C(C(z[c + 1280 >> 2] + z[c + 2304 >> 2]) * C(6574))) + C(C(z[c + 2048 >> 2] - z[c + 1536 >> 2]) * C(37489)))));
                        z[(b << 6) + a >> 2] = V(C(C(C(C(C(C(C(C(z[c + 3592 >> 2] * C(104)) + C(z[c + 3080 >> 2] * C(1567))) + C(z[c + 2568 >> 2] * C(9727))) + C(z[c + 2056 >> 2] * C(64019))) + C(z[c + 1544 >> 2] * C(-9975))) + C(z[c + 1032 >> 2] * C(-45))) + C(z[c + 520 >> 2] * C(146))) + C(z[c + 8 >> 2] * C(-5))))
                    }

                    function aa(a, b, c) {
                        var d = 0,
                            e = 0,
                            f = C(0),
                            g = C(0),
                            h = 0,
                            i = C(0),
                            j = C(0),
                            k = C(0),
                            l = C(0);
                        e = O - 32 | 0;
                        O = e;
                        ga(C(-z[a >> 2]), C(z[a + 24 >> 2] + z[a + 12 >> 2]), C(z[a + 48 >> 2] + z[a + 36 >> 2]), e + 20 | 0);
                        ga(z[a + 60 >> 2], C(z[a + 48 >> 2] - z[a + 36 >> 2]), C(z[a + 24 >> 2] - z[a + 12 >> 2]), e + 8 | 0);
                        z[e + 12 >> 2] = -z[e + 12 >> 2];
                        a = 0;
                        while (1) {
                            if ((a | 0) != 3) {
                                d = a << 2;
                                h = d + c | 0;
                                i = z[h >> 2];
                                f = z[d + (e + 20 | 0) >> 2];
                                g = z[d + 7568 >> 2];
                                j = z[d + 7580 >> 2];
                                k = z[d + (e + 8 | 0) >> 2];
                                z[h >> 2] = C(f * g) - C(j * k);
                                h = b + d | 0;
                                l = z[(0 - a << 2) + 7576 >> 2];
                                f = C(C(f * j) + C(k * g));
                                d = 5 - a << 2;
                                g = z[d + 7568 >> 2];
                                z[h >> 2] = C(i * l) - C(f * g);
                                z[b + d >> 2] = C(f * l) + C(i * g);
                                a = a + 1 | 0;
                                continue
                            }
                            break
                        }
                        O = e + 32 | 0
                    }

                    function U(a, b) {
                        var c = 0,
                            d = 0;
                        d = v[a + 4 >> 2];
                        c = d + b | 0;
                        v[a + 4 >> 2] = c;
                        if (v[a + 8 >> 2] >= (c | 0)) {
                            c = d & 7;
                            b = c + b | 0;
                            d = v[a >> 2] + (d >> 3) | 0;
                            a = w[d | 0] & 255 >>> c;
                            c = 0;
                            while (1) {
                                if ((b | 0) >= 9) {
                                    b = b - 8 | 0;
                                    c = a << b | c;
                                    d = d + 1 | 0;
                                    a = w[d | 0];
                                    continue
                                }
                                break
                            }
                            a = a >>> 8 - b | c
                        } else {
                            a = 0
                        }
                        return a
                    }

                    function ja(a, b) {
                        var c = 0,
                            d = 0,
                            e = 0,
                            f = C(0),
                            g = C(0),
                            h = 0;
                        b = (b | 0) > 0 ? b : 0;
                        h = a + 2304 | 0;
                        while (1) {
                            if ((b | 0) != (d | 0)) {
                                c = d << 2;
                                e = c + a | 0;
                                f = z[e >> 2];
                                c = c + h | 0;
                                g = z[c >> 2];
                                z[e >> 2] = f + g;
                                z[c >> 2] = f - g;
                                d = d + 1 | 0;
                                continue
                            }
                            break
                        }
                    }

                    function ka(a) {
                        var b = 0,
                            c = 0;
                        a: {
                            if (w[a | 0] != 255) {
                                break a
                            }
                            b = w[a + 1 | 0];
                            if ((b & 240) != 240 & (b & 254) != 226 | !(b & 6)) {
                                break a
                            }
                            a = w[a + 2 | 0];
                            if ((a & 240) == 240) {
                                break a
                            }
                            c = (a & 12) != 12
                        }
                        return c
                    }

                    function ba(a, b) {
                        var c = 0;
                        while (1) {
                            c = (b | 0) < 120 ? b : 120;
                            a = C(a * C(z[((c & 3) << 2) + 2128 >> 2] * C(1073741824 >>> (c >> 2) | 0)));
                            b = b - c | 0;
                            if ((b | 0) > 0) {
                                continue
                            }
                            break
                        }
                        return a
                    }

                    function Y(a, b) {
                        var c = 0;
                        a: {
                            if (!ka(b) | (w[b + 1 | 0] ^ w[a + 1 | 0]) >>> 0 > 1) {
                                break a
                            }
                            b = w[b + 2 | 0];a = w[a + 2 | 0];
                            if ((b ^ a) & 12) {
                                break a
                            }
                            c = b >>> 0 < 16 ^ a >>> 0 > 15
                        }
                        return c
                    }

                    function oa() {
                        la();
                        v[4412] = 0;
                        v[4413] = 0;
                        v[4411] = 9216;
                        v[4410] = 17680;
                        v[4409] = 2304;
                        v[4408] = 15328;
                        v[4414] = 0;
                        v[4415] = 0;
                        v[4416] = 0;
                        return 17632
                    }

                    function W(a, b, c) {
                        var d = 0;
                        if (c) {
                            d = a;
                            while (1) {
                                t[d | 0] = w[b | 0];
                                d = d + 1 | 0;
                                b = b + 1 | 0;
                                c = c - 1 | 0;
                                if (c) {
                                    continue
                                }
                                break
                            }
                        }
                        return a
                    }

                    function ga(a, b, c, d) {
                        z[d + 4 >> 2] = a + c;
                        a = C(a + C(c * C(-.5)));
                        b = C(b * C(.8660253882408142));
                        z[d + 8 >> 2] = a - b;
                        z[d >> 2] = b + a
                    }

                    function fa(a) {
                        var b = 0;
                        b = v[(w[a + 2 | 0] & 12) + 1024 >> 2];
                        a = w[a + 1 | 0];
                        return b >>> ((a >>> 3 ^ -1) & 1) >>> ((a >>> 4 ^ -1) & 1) | 0
                    }

                    function $(a, b) {
                        var c = 0;
                        c = (B(B(da(a), ea(a)), 125) >>> 0) / (fa(a) >>> 0) | 0;
                        a = (w[a + 1 | 0] & 6) == 6 ? c & -4 : c;
                        return a ? a : b
                    }

                    function ea(a) {
                        var b = 0;
                        b = w[a + 1 | 0];
                        return w[(B(b >>> 3 & 1, 45) + B(b >>> 1 & 3, 15) + (w[a + 2 | 0] >>> 4) | 0) + 1025 | 0] << 1
                    }

                    function Z(a, b) {
                        var c = 0;
                        if (b) {
                            c = a;
                            while (1) {
                                t[c | 0] = 0;
                                c = c + 1 | 0;
                                b = b - 1 | 0;
                                if (b) {
                                    continue
                                }
                                break
                            }
                        }
                        return a
                    }

                    function da(a) {
                        a = w[a + 1 | 0];
                        return (a & 6) == 6 ? 384 : 1152 >>> ((a & 14) == 2) | 0
                    }

                    function ca(a, b, c) {
                        v[a + 4 >> 2] = 0;
                        v[a >> 2] = b;
                        v[a + 8 >> 2] = c << 3
                    }

                    function X(a) {
                        return w[a + 2 | 0] & 2 ? (w[a + 1 | 0] & 6) == 6 ? 4 : 1 : 0
                    }

                    function V(a) {
                        return C(a * C(30517578125e-15))
                    }

                    function la() {
                        t[14808] = 0
                    }

                    function ma() {}
                    // EMSCRIPTEN_END_FUNCS
                    e = w;
                    p(S);
                    var P = c([]);

                    function Q() {
                        return s.byteLength / 65536 | 0
                    }
                    return {
                        "b": ma,
                        "c": oa,
                        "d": na,
                        "e": P
                    }
                }
                return R(T)
            }
            // EMSCRIPTEN_END_ASM




        )(asmLibraryArg)
    },
    RuntimeError: Error
};

function assert(condition, text) {
    if (!condition) {
        abort("Assertion failed: " + text)
    }
}

var HEAP = new ArrayBuffer(16777216);

var asmLibraryArg = { "a": { buffer: HEAP } };
var asmInstance = new WebAssembly.Instance();

function abort(what) {
    what = "Aborted(" + what + ")";
    var e = new WebAssembly.RuntimeError(what);
    throw e
}

var _mp3_init   = asmInstance.exports["c"];
var _mp3_decode = asmInstance.exports["d"];

function joinFloat32Arrays(arrays)
{
    var totalLength = 0;
    for (var i = 0; i < arrays.length; i++) {
        totalLength += arrays[i].length;
    }

    var result = new Float32Array(totalLength);
    var offset = 0;
    for (var i = 0; i < arrays.length; i++) {
        result.set(arrays[i], offset);
        offset += arrays[i].length;
    }

    return result;
}


onmessage = function(e) {
    try {
        var mp3ArrayBuffer = e.data;
        var mp3Array = new Uint8Array(mp3ArrayBuffer);

        var contextInHeap = _mp3_init();
        var context = new Uint32Array(HEAP, contextInHeap, 9);

        var inputInHeap  = new Uint8Array(  HEAP, context[0], context[1]);
        var outputInHeap = new Float32Array(HEAP, context[2], context[3]);

        var sampleCount = 0;
        var sampleRate = 0;
        var channelCount = 0;
        var leftFramesArray  = null;
        var rightFramesArray = null;
        var leftFrames;
        var rightFrames;

        var outputLength;
        var offset = 0;

        while (1) {
            var lengthToCopy = Math.min(
                mp3Array.length - offset,
                inputInHeap.length
            );

            if (lengthToCopy <= 0) break;
            inputInHeap.set(mp3Array.subarray(offset, offset + lengthToCopy));

            context[4] = lengthToCopy;
            _mp3_decode();

            sampleCount = context[5];
            if (!sampleCount) break;

            offset += context[6];
            channelCount = context[7];
            sampleRate   = context[8];

            if (channelCount > 0 && !leftFramesArray) {
                leftFramesArray  = [ ];
            }

            if (channelCount > 1 && !rightFramesArray) {
                rightFramesArray = [ ];
            }

            if (channelCount > 0) {
                leftFrames = new Float32Array(sampleCount);
                leftFramesArray.push(leftFrames);
            }

            if (channelCount > 1) {
                rightFrames = new Float32Array(sampleCount);
                rightFramesArray.push(rightFrames);
            }

            if (channelCount > 1) {
                for (var i = 0; i < sampleCount; i++) {
                    leftFrames[i]  = outputInHeap[(i * 2) + 0];
                    rightFrames[i] = outputInHeap[(i * 2) + 1];
                }
            } else {
                for (var i = 0; i < sampleCount; i++) {
                    leftFrames[i]  = outputInHeap[i];
                }
            }
        }

        if (leftFramesArray.length > 0) {
            var channelData = [ ];
            if (channelCount > 0) channelData.push(joinFloat32Arrays(leftFramesArray));
            if (channelCount > 1) channelData.push(joinFloat32Arrays(rightFramesArray));

            postMessage({
                channelData: channelData,
                sampleRate: sampleRate
            });
        } else {
            postMessage({ });
        }

    } catch (e) {
        postMessage({ });
    }
    
    close();
}

