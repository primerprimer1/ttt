window.onload=function(){
    var content = new Vue({
        el: '#app',
        data:{
            pageStatus: true,
            inited: false,
            isPC: true,
            showMobile: false,
            indexMessage: ['One-stop DEFI protocol', "一站式DEFI协议"],
            tipList: [
                {
                    name: "Wrapper",
                    image: "./Flamingo_files/wrapper.2a983fd5.svg",
                    title: "跨链资产网关",
                    text: "实现比特币，以太坊，IPFS，PI NETWORK等区块链资产的双向转换"
                },{
                    name: "Vault",
                    image: "./Flamingo_files/vault.1f632da6.svg",
                    title: "资管中心",
                    text: "首创资产证明挖矿，并整合了资产质押 ，流动性挖矿，以及抵押型稳定币发行等多种功能的资管平台。"
                },{
                    name: "Swap",
                    image: "./Flamingo_files/swap.b570ec0b.svg",
                    title: "去中心化交易平台",
                    text: "通过自动做市商，为PI NETWORK、比特币、以太坊提供无限流动性，使各种资产可以快捷交易。"
                },{
                    name: "Oracle",
                    image: "./Flamingo_files/perp.2c917dfc.png",
                    title: "预言机",
                    text: "实现现跨链数据调取，支持多条主流公链的预言机网络，为区块链之间的跨链信息交互打开一扇大门。"
                },{
                    name: "DAO",
                    image: "./Flamingo_files/dao.20a52b2b.svg",
                    title: "去中心化治理",
                    text: "由社区和平台通证持有者决定未来平台的发展方向和关键参数配置。"
                }
            ],
            tipListEN: [
                {
                    name: "Wrapper",
                    image: "./Flamingo_files/wrapper.2a983fd5.svg",
                    title: "Crosschain Asset Gateway",
                    text: "for BTC, ETH, USDT, NEO, ONT and more"
                },{
                    name: "Vault",
                    image: "./Flamingo_files/vault.1f632da6.svg",
                    title: "One-Stop Asset Manager",
                    text: "for asset staking and collateralized stablecoin issuance"
                },{
                    name: "Swap",
                    image: "./Flamingo_files/swap.b570ec0b.svg",
                    title: "Onchain Liquidity Provision",
                    text: "through Auto Market Maker for crosschain assets, FLM and other NEP-5s"
                },{
                    name: "Perp",
                    image: "./Flamingo_files/perp.2c917dfc.png",
                    title: "Perpetual Contract",
                    text: "for virtually any underlying assets with infinite liquidity"
                },{
                    name: "DAO",
                    image: "./Flamingo_files/dao.20a52b2b.svg",
                    title: "Decentralized Governance",
                    text: "Let the community shape the future of the protocol"
                }
            ],
            tipListCN: [
                {
                    name: "Wrapper",
                    image: "./Flamingo_files/wrapper.2a983fd5.svg",
                    title: "跨链资产网关",
                    text: "实现比特币，以太坊，IPFS，PI NETWORK等区块链资产的双向转换"
                },{
                    name: "Vault",
                    image: "./Flamingo_files/vault.1f632da6.svg",
                    title: "资管中心",
                    text: "首创资产证明挖矿，并整合了资产质押 ，流动性挖矿，以及抵押型稳定币发行等多种功能的资管平台。"
                },{
                    name: "Swap",
                    image: "./Flamingo_files/swap.b570ec0b.svg",
                    title: "去中心化交易平台",
                    text: "通过自动做市商，为PI NETWORK、比特币、以太坊提供无限流动性，使各种资产可以快捷交易。"
                },{
                    name: "Oracle",
                    image: "./Flamingo_files/perp.2c917dfc.png",
                    title: "预言机",
                    text: "实现现跨链数据调取，支持多条主流公链的预言机网络，为区块链之间的跨链信息交互打开一扇大门。"
                },{
                    name: "DAO",
                    image: "./Flamingo_files/dao.20a52b2b.svg",
                    title: "去中心化治理",
                    text: "由社区和平台通证持有者决定未来平台的发展方向和关键参数配置。"
                }
            ],
            features: ['Features', "特性"],
            featuresList: [{
                title: "真正平等的DeFi",
                text: " 平台通证直接空投给社区成员，人人皆可参与，机会均等，避免了传统DEFI的马太效应现象。 "
            },{
                title: "资产自动增殖",
                text: " 跨链资产将自动切换智能合约，实现利益最大化的自动增殖的效果。 "
            },{
                title: "网关/桥梁",
                text: " 作为网关/桥梁，将比特币，以太坊，IPFS，PI NETWORK等资产连接起来。 "
            }],
            featuresListEN: [{
                title: "Interoperable DeFi",
                text: "Frictionless access to crypto assets on Neo, Ethereum, Ontology, COSMOS SDK-based Networks and more"
            },{
                title: "Fair Launch",
                text: "0 FLM (Platform token) for pre-sale, pre-mint or team distribution. 100% distributed based on participation"
            },{
                title: "Capital Efficiency",
                text: "Harvest Swap and Perp transaction fee, FLM, and credit allowance seamlessly to maximize your capital gain"
            }],
            featuresListCN: [{
                title: "真正平等的DeFi",
                text: " 平台通证直接空投给社区成员，人人皆可参与，机会均等，避免了传统DEFI的马太效应现象。 "
            },{
                title: "资产自动增殖",
                text: " 跨链资产将自动切换智能合约，实现利益最大化的自动增殖的效果。 "
            },{
                title: "网关/桥梁",
                text: " 作为网关/桥梁，将比特币，以太坊，IPFS，PI NETWORK等资产连接起来。 "
            }],
            timeline: ["Timeline","时间线"],
            showAllTimeline: false,
            timelineList: [{
                time: " 2020.03.01 ",
                text: " 社区成立 "
            },{
                time: " 2020.08.07 ",
                text: " 社区人数突破3万人 "
            },{
                time: " 2020.10.01 ",
                text: " 官网上线，社区治理通证上线UNISWAP交易所 "
            },{
                time: " 2020.10.07 ",
                text: " 社区空投开启，资产证明挖矿开启 "
            },{
                time: " 2020.11.02-2020.11.07 ",
                text: " DAO上线，社区第一次公投，共同制定未来的发展方向和参数设置 "
            },{
                time: " 202?.11.25 ",
                text: " PI NETWORK 上线 "
            },{
                time: " 2020.12.23 ",
                text: " PI NETWORK SWAP 上线 "
            }],
            timelineListEN: [{
                time: " 2020.8.14 ",
                text: " Neo MainNet Upgrade \n - Support Crosschain Functionality "
            },{
                time: " 2020.8.18 ",
                text: " Poly Network Launch "
            },{
                time: " 2020.9.23 - 9.25 ",
                text: " WRAPPER Launch \n VAULT Phase 1: NEO + Crosschain Asset Staking "
            },{
                time: " 2020.9.30 ",
                text: "  SWAP Launch \n VAULT Phase 2: LP Token Staking  "
            },{
                time: " 2020.10.28 ",
                text: " VAULT Phase 3: Stablecoin Issuance "
            },{
                time: " 2020.11.25 ",
                text: " PERP Launch "
            },{
                time: " 2020.12.23 ",
                text: " DAO Launch "
            }],
            timelineListCN: [{
                time: " 2020.03.01 ",
                text: " 社区成立 "
            },{
                time: " 2020.08.07 ",
                text: " 社区人数突破3万人 "
            },{
                time: " 2020.10.01 ",
                text: " 官网上线，社区治理通证上线UNISWAP交易所 "
            },{
                time: " 2020.10.07 ",
                text: " 社区空投开启，资产证明挖矿开启 "
            },{
                time: " 2020.11.02-2020.11.07 ",
                text: " DAO上线，社区第一次公投，共同制定未来的发展方向和参数设置 "
            },{
                time: " 202?.11.25 ",
                text: " PI NETWORK 上线 "
            },{
                time: " 2020.12.23 ",
                text: " PI NETWORK SWAP 上线 "
            }],
        },
        created:function(){
            this.isPC = document.body.clientWidth>992;
            window.onresize = () => {
                return (() => {
                    this.isPC = document.body.clientWidth>992;
                })();
            };
        },
        mounted() {
            debugger
            this.inited = true
        },
        methods:{
            // 函数
            changeStatus : function(){
                this.showMobile = false
                this.pageStatus = !this.pageStatus
                if(this.pageStatus) {
                    this.tipList = this.tipListEN
                    this.featuresList = this.featuresListEN
                    this.timelineList = this.timelineListEN
                } else {
                    this.tipList = this.tipListCN
                    this.featuresList = this.featuresListCN
                    this.timelineList = this.timelineListCN
                }
            },
            showToast() {
                this.$message('即将上线。');
            },
            showAllTimelineFN() {
                this.showAllTimeline = true
            },
            showMobileWindow() {
                this.showMobile = !this.showMobile
            }
        },
        computed:{
              
        },
        watch:{
            // 监控
        }
    });
}