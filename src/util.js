export function getPlatform() {
  //const platform = 'localhost';
  //const platform = 'bob';
  const platform = 'staging';
  //const platform = 'dashboard';

  //const platform = 'noToken';

  let token;
  let preUrl;

  switch (platform) {
    case 'localhost':
      preUrl = 'http://localhost:44303/';
      //Dave
      // token = 'Bearer SvI2yxcNIsGW0LXWq8g6Y6ibxW4uqd0rVehTzmEjRX64qgV1C9KHjUxqTWQ4RfS8NBkz8teCPLvuWH3suvnV3LCPP6fn3wSMiNb5qirfTKR2Yte1JOQOSUTuUo0AeE1ffMtVWH38ysT8dOLVY_oxrPPnWcAdO2iQThfQ_DCxaOAabqekfyHuByavaiqM6iP6hVFJt7KNnS8FVYk2FOKc3Op7yveDxu486hVniU3kJzgD9BtK-__WOSMOEnq28lcVqleT-6nzxOekIu1XUQ3SMIlTJMfpWy1O0Qo80y8tcqUucnQfYNxK-Oxd86e9ZSl5ko7BFwMZ2DMF3CS8DPcEX5cgzvW3pG7wJUdcP-LWU7PAOCXK5Ka9ZDVE0uk0WaewdwCgYsPsF_adzsB5bS_fxAn-7BumhEc8Pn-mOkaTltOqcw2WmMSTQ3O2aQjgnjrqTY83t5ZXFH3hROHt89n_NMbw_s6xOIFFNZTA-N9t-VWawBrcs6PHtKymFXXhuKos_kAwtbcUQvKXz_IjZvcQuw';
      //token = 'Bearer _T6kr_95nHO0J-yE2Ex-Im4mFfb16iuqJbmhflsnkwbK10H3vhHqYPbBVSE75VCkwDlYqnhhpU9vpKjN7UVG4n3MHYNYxRJEhTk__ax5KMFXIkkJ4bZuvY9LHpRn8xlE8LeMy0XB1aWs1S0sD_Qd0azEJcYd8_Pevhi2YLZrqxUiRAZOppm_YGscaKtWnd9H5mnQ1iA-XkG_XpsIJ_YcWpCA_6InU1cvzjdEubsAsjwcx01awSRuT4iLq7ry8S10mMwkXSI25Vj2kCIg1_f_VC9uzsK9w3q3msVUe2S8uK9Tg_fU7YbzAc1tYAzqNJHKqEMBudjalf9KHpN1aqEzg39uQZONZHozkIsqRb3BaBaDlSOzMRP6Xy6mkcnzLHrf5JPLGnfklOr03HNU9kOEVuNZdPjlxCY8aejPGUoJu85m7nKjMGR9dB9Y2_Ngi3XWpkt9qxacn9zaSp5sf8BNoqptJtk8TRSUM_aj0QYOgY8x53TN0acu1mpBNxBTcOLCCKVrcEzsiThTwhNyq_NI0l5UolzcfZJg6yuW0OoMXko';
      // token = 'Bearer 3QZLvoG7rRnXeHhacV_BlhhVsZZJcb34zgp4x6EinlkIYebWLnmr_gp3BGV6ezxYbCui399Yc7ruoZxp_fVb_ez_-rTnPx2kUWOf2GmiZ7dTGe4TOqz4hWTEwURLPvoyxnDOZokvY8wPnT3a0hsKQ-uuZFAh7nPUZNtnznXVdupmYa3kN_9XaQ8W78d119ITpgmSbqBHgGLLrN59yR9_4lk11sHe0j-fDB8B5gV3-neCq3Sgh2hyXcd-sPdAmS7LoK1UHRCYPxWAzV6LhW5a3EYX3fDAfxK5kDS5xh0wQkgqHwf1hECGE4PGizQ57GeK2r8tMczOnjxKYx0QJ_m4Z9HGzIYAwzKCFggWSlE3XjK33tmFGfalddKbnVx8yLb1DHSRzonGs0GjkFJ0xkgs98H8IHfovoTN2GOyj9ZHYlh1_BFKMMscwaQJBKohQc8jJ3Hsrb1xojDpdN6aksiix484Qf-cwkx9R9Np_-dawaoaVcru2BEoOCNtj9Q1CcVDkepg1QRRT_p11_l2799PIFp0nNR_qV0UzIYoez71kqI';
      token = 'Bearer 1eaF-v3hskq9H13woKJWkFwyjN_9FQ3E4yCk0xwTjt_44YoUwyLRhBEqn0ds-pOBJbxp0OJta8h30rZG3T95tCkoAflBcMHdJT5xURiVgEAkA5GZcvORwHSUwC1o3A4tzpmlvo6p6vI5cIyejKESAtVZQ6XLVAgsZ6A2t0o92rlBWlt50aexo-b0FunnGT32N74nYadAJAkB6FJu1B7ZL5kIXrm3KWVyOs039xug7Gn9e6eXNXiQqGT_oI0x0VWUPw0wnRov6keApxcfrgWzYL3vJR1XjHR3GNNcRCEjZENaF2f-F39HvZtS4NXi-pkmlR8OH8mCl5EX2fhEGyBNrgzyLfFTwFJWeoHyMF84iDfkREZmGTsaGQyq1GJiDBNaLqo1PzauCQSxVXwIbmhBenyL03QbwX7v964jgWTKvwmIf_fwE9d5ADU0qU3UZhLneRruG_rfGg5dwvhTyQfWF2f4c9dt4Lh3xQpfPgYzhrWu-hfXc7rPhxl_ksgC2smModQzT_RcZTgeqSyyD9XF63lbW8y2TURNt1q2Rrtek_o';
      break;
    case 'bob':
      preUrl = 'http://192.168.0.43:44303/';
      token = 'Bearer D5LfVXQxwwO0--11Bdmdy_n0kUjJ4KI3UW9mMMh-ZxaRkCgX69LbsCLmPPVqeGhEV8iz7KuZUQgZ8MvBUtn31GfDc90CPARtO-Ob3cLgLlcIvfaOZay9FgkCV2tIzyImyxp0wv3jAmBXp0m4XIi1QzZsmXmt7qk3M_XumMbmJjWK_Z0vqSSCj23-yXmAeX7y2-Ssk1O1UqSlfAthl7UMUM4ZZZtz2dp_Zfp_9w0n3NKnbPH91QKWOkQ3zMvFhOywrR6cQkMaCEEXSLh8u0fQ3YFrQYlq14-3RlplZ4cYxC3eDCnWRvpAAN22YfHGNPTgq1bDilCnCM1B0wDCuyscRt68yP8aCOxsfRuap7X5YDTzTBOWpvctZPlyfOS_GcV_uYgZwCcUOiCusK-cdtua1tWOAjE6H-n25R8yRqfoy987jfTrT2NYzaddNO3SoggG6UNn7gRGaRrgJ6BHFv9wHjELc-5MgrV47uS2n62B_frCmZoiTntvoE3XeviWqo77XmRriLk_NZ0SHb5Ec8_JRY10rn8UGF-JqZqoM_RQP4w';
      break;
    case 'staging':
      preUrl = 'https://staging-dashboard.shotscope.com/';
      token = 'Bearer EKnlmvctFDuKUOYxNqQ6v_r5oPQHfdP_JPmB4BmkFDQjHEpvk-qAV_4E5myAC4tZ3nykoH-xQb-B2ffSizIh6TR2kQVMhbTrlkoqYEZHKYz0iyzcPZhGROB7_ccIC0OSHUFFNlOz6i6w0S_U6TdLnyvKvPKM2RDMFvNE-7QjpGzGDRM9VqHhKeH6uuVX2wPcN51Vyl4juvIPkasO6Gqg1jW0uhac1x_CNKuP6CIel9TDDOWZH6TSpBKzvrQQAO_ZawCqs6M1Wt9lmnr45H8SUdzDQhzhtOa5J2gSiIgSyFTYSawDiMUF5LE1MWX8CyV10ITN2x8EUKOMqNRmmmORTrCP7HGhM_OQLe0-wrcEUKVUvBxdRLaNznTNx80GC4yIcF67DK5oa4raJwHs0iZ_F52LRMtj1W2IWJ4B8aiIndC8CWZJHJEHc0epXRorml-RfMau1Uk68Ebdd6JgAUs0HHdCywgCW9ggiIVLGO44V9Bup4SUugd-W05JkEW0pRWUyITIPS9huWH_kSNBbHj7-p7TcSllgYg38gD8kbzMCao';
      //Lewis
      // token = 'Bearer Mkd-9fXdnY4_rbg6qmB60J0vbE-hd07t2qDNakZcuSLqcYDaja_uom30XxLkvLOy4JaIlaEAK6B01uzyghTWHgTXM-v8EQZ1xkA4dBKH18KYCF-zUvBmNeYfpprTO7QBZdLcflvL7c-OCwcDkivGnEmNTQx5pWMvtP2ZdWgVyyEu_YgjMU4CLh_rCl7Z3TA4bY8ZISUYzNPNkgfe1nPbNJGYyTXYdQunLn6LbLW-lwgSlF2GWHMtswi_8JkBr4bdklVL-t8sqp-7PfxpieHL7L0YlteI0oLx-Bc4n0shZ7cVDITp6O6khJIAdyvI8zNZatEgu5R-upME-apDDhib5Q3coUKKOd6Qatac9MmIBocdOopz_HE64If4AxhsLS1CXbnUcaTsr-etDCQ7EYdvmfsbdQUOHYHCZR5Ktz4L5GhBMlcHuENEzGi_oPAWjkkXdBGZdyuYE2gAaMQYwpMcUH5bG0A6Mu17fKUfW0dPAgvcMjme3M_UINDaFEawg7Dd6-STnidsSze2YEybyIc0oKhmZnZ8_Ame-1lKF750dao';

      // token = 'Bearer CvUeTJE5cNTwICqFiZlCcenfiPKFE3GwKPoJlrl57p8WLRUBKmOR-1aGNUWN9E05FX5k7sXKB1uaxZ8_9GcoAnrPXHBJ0Kd84bUydOOUWHjB9Cn0KqWEHz0NhhAJ-Y1CbqvpzAKcgHY5CUgN4uu56xoI2wZR-9s4lgNL_pTanNsYJFpBNHE3U9lNF41U6__OiwvCnS98BTW5ZbsG3F64oIGYUkc_ylA9JaiXIRTdQ4XDVi1Sm-rp1sqyRvTasMKzA3dL3QoICHLtXIaRc3DMMbQbdHKJ6BHdmvPQGoY0TKWSjUdeUY9s3Vi4AkCkTrcElw1DoTC2hj_dkYQXB68PmODgq1ushQt8PrEkyH1UFpzMqw2ZpBxwvobPJ-R2ty9g1v38qoRhmkmxYcaoOgDpWQk_MBDVJetzUs4gdYXT5FrwPzaWJeUkT2k-nEsM3o_6c7--70aRDnNa4ayAu05YFyg328OdJ7C9hqlfA5ZsjWm2AbbW50wypaKq9yXltLQgECFNP5wonhr5iOLbZGbi0dn1jvKgG1HfWTWeEPS7jN4';
      break;
    case 'dashboard':
      preUrl = 'https://dashboard.shotscope.com/';
      token = '';
      break;
    default:
      preUrl = '';
      token = '';
      if (window.location.href.split('Content').length === 2) {
        preUrl = window.location.href.split('Content')[0];
      }
  }
  return [preUrl, token];
}
