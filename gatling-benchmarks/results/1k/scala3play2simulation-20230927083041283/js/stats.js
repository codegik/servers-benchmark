var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "60000",
        "ok": "17442",
        "ko": "42558"
    },
    "minResponseTime": {
        "total": "55",
        "ok": "55",
        "ko": "7106"
    },
    "maxResponseTime": {
        "total": "60003",
        "ok": "59999",
        "ko": "60003"
    },
    "meanResponseTime": {
        "total": "12845",
        "ok": "7872",
        "ko": "14882"
    },
    "standardDeviation": {
        "total": "15088",
        "ok": "14623",
        "ko": "14799"
    },
    "percentiles1": {
        "total": "10000",
        "ok": "420",
        "ko": "10000"
    },
    "percentiles2": {
        "total": "10001",
        "ok": "7445",
        "ko": "10001"
    },
    "percentiles3": {
        "total": "60000",
        "ok": "40040",
        "ko": "60000"
    },
    "percentiles4": {
        "total": "60001",
        "ok": "58491",
        "ko": "60001"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 10462,
    "percentage": 17
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 44,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 6936,
    "percentage": 12
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 42558,
    "percentage": 71
},
    "meanNumberOfRequestsPerSecond": {
        "total": "504.202",
        "ok": "146.571",
        "ko": "357.63"
    }
},
contents: {
"req_request-10573": {
        type: "REQUEST",
        name: "request",
path: "request",
pathFormatted: "req_request-10573",
stats: {
    "name": "request",
    "numberOfRequests": {
        "total": "60000",
        "ok": "17442",
        "ko": "42558"
    },
    "minResponseTime": {
        "total": "55",
        "ok": "55",
        "ko": "7106"
    },
    "maxResponseTime": {
        "total": "60003",
        "ok": "59999",
        "ko": "60003"
    },
    "meanResponseTime": {
        "total": "12845",
        "ok": "7872",
        "ko": "14882"
    },
    "standardDeviation": {
        "total": "15088",
        "ok": "14623",
        "ko": "14799"
    },
    "percentiles1": {
        "total": "10000",
        "ok": "420",
        "ko": "10000"
    },
    "percentiles2": {
        "total": "10001",
        "ok": "7445",
        "ko": "10001"
    },
    "percentiles3": {
        "total": "60000",
        "ok": "40038",
        "ko": "60000"
    },
    "percentiles4": {
        "total": "60001",
        "ok": "58491",
        "ko": "60001"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 10462,
    "percentage": 17
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 44,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 6936,
    "percentage": 12
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 42558,
    "percentage": 71
},
    "meanNumberOfRequestsPerSecond": {
        "total": "504.202",
        "ok": "146.571",
        "ko": "357.63"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
