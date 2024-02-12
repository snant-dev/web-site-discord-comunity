import {useEffect, useState} from "react";
import {getManchesterInfo, ManchesterInfo} from "@/fetch/getMatchInfo/getMatchsInfo";
import {Title} from "@/components/Title/Title";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";

export default function ManchesterInfo() {
    const test = getManchesterInfo();
    const [manchesterInfo, setManchester] = useState<ManchesterInfo[]>();

    useEffect(() => {
        const getData = async () => {
            return await test;
        }
        getData().then(dataComponent => setManchester(dataComponent))
    }, [])

    return <>
        <h3 className="ps-14  pb-10 text-4xl  font-bold  tracking-tighter sm:text-4xl">
            {"Manchester Games"}
        </h3>
        <Card className={"flex flex-col mx-10 justify-center items-center"}>
            <CardHeader>
                <CardContent className={"grid  justify-center items-center text-center"}>
                    <div>
                        <CardTitle>{manchesterInfo?.[0].home_team + " vs "+   manchesterInfo?.[0].visitor_team}</CardTitle>
                        <CardTitle>{manchesterInfo?.[0].match_result}</CardTitle>
                        <CardDescription>{ manchesterInfo?.[0].competition}</CardDescription>
                        <CardDescription>{"Date: " + manchesterInfo?.[0].match_date}</CardDescription>
                    </div>
                </CardContent>
            </CardHeader>
        </Card>
        <br/>
        <Card className={"flex flex-col mx-10 mb-5 justify-center items-center"}>
            <CardHeader>
                <CardContent className={"grid  justify-center items-center text-center"}>
                    <div>
                        <CardTitle>{manchesterInfo?.[1].home_team + " vs "+   manchesterInfo?.[1].visitor_team}</CardTitle>
                        <CardDescription>{ manchesterInfo?.[1].competition}</CardDescription>
                        <CardDescription>{"Date: " + manchesterInfo?.[1].match_date}</CardDescription>
                    </div>
                </CardContent>
            </CardHeader>
        </Card>

    </>
}