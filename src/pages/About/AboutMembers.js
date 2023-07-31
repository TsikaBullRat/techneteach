import { useRef } from "react"
import profile1 from "../../res/nicolas-horn-MTZTGvDsHFY-unsplash.jpg"
import { MemberCard, IMG, NameTag, Text } from "./sub-comp"

export const Members = () =>{

    const member1 = useRef(0)
    return(
        <div className="about-members" >
            <div className="member-box" >
            <MemberCard >
                <IMG src={profile1}/>
                <NameTag >Ivan Johnsson</NameTag>
                <Text>
                    Lorem ipsum adole adole sghajdhgsah sgadjkhsdkjshdjkasdk hgsdjasg
                </Text>
            </MemberCard>
            <MemberCard >
                <IMG src={profile1}/>
                <NameTag >Ivan Johnsson</NameTag>
                <Text>
                    Lorem ipsum adole adole sghajdhgsah sgadjkhsdkjshdjkasdk hgsdjasg
                </Text>
            </MemberCard>
            <MemberCard >
                <IMG src={profile1}/>
                <NameTag >Ivan Johnsson</NameTag>
                <Text>
                    Lorem ipsum adole adole sghajdhgsah sgadjkhsdkjshdjkasdk hgsdjasg
                </Text>
            </MemberCard>
            <MemberCard >
                <IMG src={profile1}/>
                <NameTag >Ivan Johnsson</NameTag>
                <Text>
                    Lorem ipsum adole adole sghajdhgsah sgadjkhsdkjshdjkasdk hgsdjasg
                </Text>
            </MemberCard>
            <MemberCard >
                <IMG src={profile1}/>
                <NameTag >Ivan Johnsson</NameTag>
                <Text>
                    Lorem ipsum adole adole sghajdhgsah sgadjkhsdkjshdjkasdk hgsdjasg
                </Text>
            </MemberCard>
            <MemberCard >
                <IMG src={profile1}/>
                <NameTag >Ivan Johnsson</NameTag>
                <Text>
                    Lorem ipsum adole adole sghajdhgsah sgadjkhsdkjshdjkasdk hgsdjasg
                </Text>
            </MemberCard>
            <MemberCard >
                <IMG src={profile1}/>
                <NameTag >Ivan Johnsson</NameTag>
                <Text>
                    Lorem ipsum adole adole sghajdhgsah sgadjkhsdkjshdjkasdk hgsdjasg
                </Text>
            </MemberCard>
            <MemberCard >
                <IMG src={profile1}/>
                <NameTag >Ivan Johnsson</NameTag>
                <Text>
                    Lorem ipsum adole adole sghajdhgsah sgadjkhsdkjshdjkasdk hgsdjasg
                </Text>
            </MemberCard>
            </div>
        </div>
    )
}