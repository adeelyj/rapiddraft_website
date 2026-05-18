// Every module animation conforms to this contract.
// The GuidedDemo overlay owns the timeline (step + auto-advance) and passes
// the active step into the animation. Each animation reads `step` and renders
// the corresponding state.

export type AnimationProps = {
  /** Currently active step (0-indexed). Animation should reflect this state. */
  step: number
  /** Total step count — animation can use this to display progress. */
  totalSteps: number
}

export type AnimationComponent = (props: AnimationProps) => React.ReactNode
