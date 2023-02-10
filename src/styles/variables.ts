import Immutable  from 'immutable';

export const colors =Immutable.Map<string,string>({
    bs_primary : '#28527a',
    bs_white:'#fcfcfc',
    bs_main:'#22b0f0',
    bs_sub_main:'#1d4164',
    bs_yellow:'#f9ba32',
    bs_light_gray:'#EEEEEE',
    text_dark:'#666',
    bg_facebook:"#3B5999",
    bs_muted_dark:"5b7084"
})

export const common ={
    w_80:'80%',
    focusBoxShadow:`0 0 0 1px ${colors.get('bs_yellow')}`
}
export const navbar = {
    min_height:'104px',
    width:'80%',
    logo:{
        width:'230px',
        height:'54px'
    },
    searchInput:{
        br:'3px',
        sub_br:'4px'
    }
}