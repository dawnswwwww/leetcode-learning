/**
 * @param {string[]} votes
 * @return {string}
 */
var rankTeams = function(votes) {
    const n = votes[0].length
    const str = votes.flat().join('')
    const length = str.length
    const res = new Map()
    for (let i = 0; i < length; i++) {
        if (res.has(str[i])) {
            res.set(str[i], res.get(str[i]) + (n - i % n))
        } else {
            res.set(str[i], n - i % n)
        }
        if (str[i] === 'R') console.log(n - i % n)
    }
    console.log(n)
    console.log(res)
    console.log(Array.from(res.keys()))
    return Array.from(res.keys()).sort((a, b) => {
        if (res.get(b) - res.get(a) === 0) {
            return a.charCodeAt() - b.charCodeAt()
        } else {
            return res.get(b) - res.get(a)
        }
    }).join('')
};

console.time()
console.log(rankTeams(["FVSHJIEMNGYPTQOURLWCZKAX","AITFQORCEHPVJMXGKSLNZWUY","OTERVXFZUMHNIYSCQAWGPKJL","VMSERIJYLZNWCPQTOKFUHAXG","VNHOZWKQCEFYPSGLAMXJIUTR","ANPHQIJMXCWOSKTYGULFVERZ","RFYUXJEWCKQOMGATHZVILNSP","SCPYUMQJTVEXKRNLIOWGHAFZ","VIKTSJCEYQGLOMPZWAHFXURN","SVJICLXKHQZTFWNPYRGMEUAO","JRCTHYKIGSXPOZLUQAVNEWFM","NGMSWJITREHFZVQCUKXYAPOL","WUXJOQKGNSYLHEZAFIPMRCVT","PKYQIOLXFCRGHZNAMJVUTWES","FERSGNMJVZXWAYLIKCPUQHTO","HPLRIUQMTSGYJVAXWNOCZEKF","JUVWPTEGCOFYSKXNRMHQALIZ","MWPIAZCNSLEYRTHFKQXUOVGJ","EZXLUNFVCMORSIWKTYHJAQPG","HRQNLTKJFIEGMCSXAZPYOVUW","LOHXVYGWRIJMCPSQENUAKTZF","XKUTWPRGHOAQFLVYMJSNEIZC","WTCRQMVKPHOSLGAXZUEFYNJI"]))
console.timeEnd()