import {commitMutation, graphql} from 'react-relay'
import Atmosphere from 'universal/Atmosphere'
import {CompletedHandler, ErrorHandler} from '../types/relayMutations'
import {ISelectRetroTemplateOnMutationArguments} from 'universal/types/graphql'
import {RETROSPECTIVE} from 'universal/utils/constants'

graphql`
  fragment SelectRetroTemplateMutation_team on SelectRetroTemplatePayload {
    retroMeetingSettings {
      id
      selectedTemplateId
    }
  }
`

const mutation = graphql`
  mutation SelectRetroTemplateMutation($teamId: ID!, $selectedTemplateId: ID!) {
    selectRetroTemplate(teamId: $teamId, selectedTemplateId: $selectedTemplateId) {
      ...SelectRetroTemplateMutation_team @relay(mask: false)
    }
  }
`

const SelectRetroTemplateMutation = (
  atmosphere: Atmosphere,
  variables: ISelectRetroTemplateOnMutationArguments,
  _context: {},
  onError: ErrorHandler,
  onCompleted: CompletedHandler
) => {
  return commitMutation(atmosphere, {
    mutation,
    variables,
    onCompleted,
    onError,
    optimisticUpdater: (store) => {
      const {selectedTemplateId, teamId} = variables
      const team = store.get(teamId)
      if (!team) return
      const meetingSettings = team.getLinkedRecord('meetingSettings', {meetingType: RETROSPECTIVE})
      if (!meetingSettings) return
      meetingSettings.setValue(selectedTemplateId, 'selectedTemplateId')
    }
  })
}

export default SelectRetroTemplateMutation
