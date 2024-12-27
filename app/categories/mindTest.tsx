import { _Text } from "@/components/TextUtilities";
import StartTest from "@/components/mindTests/Start"
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "expo-router";
const MindTestApi = require("@/api/mind_tests.json")

export default function MindTest() {
  const router = useRoute()
  const mindTestName = router.name 
  const mindTestInfo = MindTestApi[mindTestName]

  if (mindTestName == "Stress")
    return (
      <StartTest 
        img={ mindTestName }
        describe={ mindTestInfo.describe }
        link='StressTest'
      />
    )
}

